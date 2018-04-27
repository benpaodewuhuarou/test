const express = require("express");
const router = express.Router();
const path = require('path');

module.exports = passport => {
    router.get('/', (req, res) => {
        res.sendFile(path.join(__dirname + '/main.html'));
    });
    router.post('/login',
        passport.authenticate('local', {
            failureRedirect: '/login',
            successRedirect: '/sucess'

        }))
    router.get('/sucess', (req, res) => {
        res.send('sucess');
    })
    router.get('/current_user', (req, res) => {
        res.send(req.user);
    })
    router.get('/login', (req, res) => {
        res.send('failure');
    })

    return router;
}