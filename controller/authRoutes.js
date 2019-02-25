const express = require("express");
const router = express.Router();
const path = require('path');

module.exports = passport => {
    router.get('/', (req, res) => {
        res.sendFile(path.join(__dirname + '/main.html'));
    });
    router.post('/login',
        passport.authenticate('local', {
            failureRedirect: '/failure',
            successRedirect: '/sucess'
        }))

    router.get('/logout', (req, res) => {
        req.logout();
        res.send('logout')
    })
    router.get('/sucess', (req, res) => {
        res.send('sucess');
    })
    router.get('/current_user', (req, res) => {
        res.send(req.user);
    })
    router.get('/failure', (req, res) => {
        res.send(flase);
    })

    return router;
}