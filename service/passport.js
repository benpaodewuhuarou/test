const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongo = require('../model/mongodb/getCollectionTool');
const mongoMethod = require('../model/mongodb/userMongo');



passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    });
});



passport.use(new localStrategy(
    async function(username, password, done) {
        const User = await mongo.getCollection('user');
        User.findOne({ username: username }, function(err, user) {
            if (err) { return done(err) }
            if (!user) {
                return done(null, false, { message: 'incorrect username' });
            }
            if (!user.validPassword(password)) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        })
    }
))

passport.use(
    new GoogleStrategy({
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback',
            proxy: true
        },
        async(accessToken, refreshToken, profile, done) => {
            const User = await mongo.getCollection('user');
            const existingUser = await User.findOne({ googleId: profile.id });

            if (existingUser) {
                return done(null, existingUser);
            }

            const user = await mongoMethod.addUser({ gmail: profile.id });
            done(null, user);
        }
    )
);