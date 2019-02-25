const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const userService = require('./userService');



passport.serializeUser((user, done) => {
    done(null, user.username);

});

passport.deserializeUser(async(username, done) => {
    try {
        let user = await userService.getUserByUsername(username);
        done(null, user);
    } catch (e) {
        console.log('some error occurs in deserializeUser pocess');
    }
});



passport.use(new localStrategy(
    async(username, password, done) => {

        let user = {
            username: username,
            password: password
        }
        let logResult = await userService.login(user);
        if (logResult) {
            return done(null, logResult);
        } else {
            return done(null, false, { message: 'Incorrect username or password' })
        }
    }

))

// passport.use(
//     new GoogleStrategy({
//             clientID: keys.googleClientID,
//             clientSecret: keys.googleClientSecret,
//             callbackURL: '/auth/google/callback',
//             proxy: true
//         },
//         async(accessToken, refreshToken, profile, done) => {
//             const User = await mongo.getCollection('user');
//             const existingUser = await User.findOne({ googleId: profile.id });

//             if (existingUser) {
//                 return done(null, existingUser);
//             }

//             const user = await mongoMethod.addUser({ gmail: profile.id });
//             done(null, user);
//         }
//     )
// );