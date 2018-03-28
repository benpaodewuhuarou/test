/**
 * Created by shizekang on 3/28/2018.
 */
var userService = require("../service/userService");
var getLoggerTool = require("../tool/getLoggerTool");
var logger = getLoggerTool.getLogger();

/**
 * add user, the input's type should be the json
 * @param user
 * @returns {Promise.<void>}
 */
async function addUser(user) {
    var result = {};
    try {
        await userService.addUser(user);
        result["status"] = 200;
        result["message"] = "Add User Success";
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
        result["message"] = exist;
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
        result["message"] = exist;
    } catch (e) {
        logger.error("existEmail in user Controller error: " + e);
        result["status"] = 400;
        result["message"] = "check email fail";
    }
    return result;
}

