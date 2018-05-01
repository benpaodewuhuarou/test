/**
 * Created by shizekang on 3/28/2018.
 */
const userService = require("../service/userService");
const logger = require("../tool/getLoggerTool");
const crypto = require("crypto");
const express = require("express");
const router = express.Router();

/**
 * add user, the input's type should be the json
 * "username" : "1qq11", (must)
 * "email" : "658939539@qq.com", (must)
 * "password" : "111111111111111111", (must)
 * "address" : "",
 * "phoneNumber" : "",
 * "wechat" : "",
 * "restrict" : "false", (initial value: false)
 * "credit" : "100", (initial value: 100)
 * "administrator" : "false", (initial value: false)
 * @param user
 * @returns {Promise.<boolean>}
 */
router.put("/addUser", async function (req, res) {
    var result = {};
    try {
        var user = req.body;
        if (user.password != "") {
            var newpassword = crypto.createHash("md5").update(user.password).digest("hex");
            user.password = newpassword;
        }
        var user = await userService.addUser(user);
        result["status"] = 200;
        result["message"] = "Add User Success";
        result["data"] = user;
    } catch (e) {
        logger.error("addUser in user Controller error: " + e);
        result["status"] = 400;
        result["message"] = "Add User Fail";
    }
    res.send(result);
})

/**
 * check if the username exists, if username has exsited, return true, if not return false;
 * @returns {Promise.<boolean>}
 */
router.get("/existUser", async function (req, res) {
    var result = {};
    try {
        var username = req.query.username;
        var exist = await userService.existUser(username);
        result["status"] = 200;
        result["message"] = exist; //if the username exists, it means: result["message"] = true
    } catch (e) {
        logger.error("existUser in user Controller error: " + e);
        result["status"] = 400;
        result["message"] = "check username fail";
    }
    res.send(result);
});

/**
 * check if the email-exist
 * @param email
 * @returns {Promise.<{object}>}
 */
router.get("/existEmail", async function (req, res) {
    var result = {};
    try {
        var email = req.query.email;
        var exist = await userService.existEmail(email);
        result["status"] = 200;
        result["message"] = exist; //if the email exists, it means: result["message"] = true
    } catch (e) {
        logger.error("existEmail in user Controller error: " + e);
        result["status"] = 400;
        result["message"] = "check email fail";
    }
    res.send(result);
})

module.exports = router;

async function test() {
    console.log(await login({
        username: '1qq11',
        gmail: '',
        email: '658939539@qq.com',
        password: '111111111111111111',
        address: '',
        phoneNumber: '',
        wechat: '',
        restrict: 'false',
        credit: '100',
        administrator: 'false'
    }));
}

// test();