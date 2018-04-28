const app = require('express')();
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const mongo = require('./model/mongodb/getCollectionTool');
const PORT = process.env.PORT || 5000;
const configRoutes = require('./controller');
const keys = require('./configure/keys');

// const flash = require('connect-flash');
// app.use(flash());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(
    cookieSession({
        // maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());
require('./service/passport');

configRoutes(app, passport);

app.listen(PORT, () => {
    console.log('the web listen on port 5000')
})


module.exports = app;