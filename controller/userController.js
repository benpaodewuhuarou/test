/**
 * Created by shizekang on 3/28/2018.
 */
var userService = require("../service/userService");
var logger = require("../tool/getLoggerTool");
var crypto = require("crypto");

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
 * @returns {Promise.<void>}
 */
async function addUser(user) {
    var result = {};
    try {
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
    return result;
}

/**
 * check if the username exists, if username has exsited, return true, if not return false;
 * @returns {Promise.<void>}
 */
async function existUser(username) {
    var result = {};
    try {
        var exist = await userService.existUser(username);
        result["status"] = 200;
        result["message"] = exist; //if the username exists, it means: result["message"] = true
    } catch (e) {
        logger.error("existUser in user Controller error: " + e);
        result["status"] = 400;
        result["message"] = "check username fail";
    }
    return result;
}

/**
 * check if the email-exist
 * @param email
 * @returns {Promise.<{}>}
 */
async function existEmail(email) {
    var result = {};
    try {
        var exist = await userService.existEmail(email);
        result["status"] = 200;
        result["message"] = exist; //if the email exists, it means: result["message"] = true
    } catch (e) {
        logger.error("existEmail in user Controller error: " + e);
        result["status"] = 400;
        result["message"] = "check email fail";
    }
    return result;
}

/**
 * login error
 * @param user
 * @returns {Promise.<{}>}
 */
async function login(user) {
    var result = {};
    try {
        var password = crypto.createHash("md5").update(user.password).digest("hex");
        user.password = password;
        var isUser = await userService.login(user);
        result["status"] = 200;
        result["message"] = isUser; //if user logins Successfully, it means: result["message"] = true or result["message"] = false
    } catch (e) {
        logger.error("login in user Controller error: " + e);
        result["status"] = 400;
        result["message"] = "error occurs";
    }
    return result;
}

async function test() {
    console.log(await login({ username: '1qq11',
        gmail: '',
        email: '658939539@qq.com',
        password: '1111111111111111111',
        address: '',
        phoneNumber: '',
        wechat: '',
        restrict: 'false',
        credit: '100',
        administrator: 'false' }));
}

test();