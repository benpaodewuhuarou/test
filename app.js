const app = require('express')();
const path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
var bodyParser = require('body-parser');
const mongo = require('./model/mongodb/getCollectionTool');
const PORT = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());


app

app.listen(PORT, () => {
    console.log('the web listen on port 3000')
})


module.exports = app;