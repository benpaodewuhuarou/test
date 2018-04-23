/**
 * Created by shizekang on 3/28/2018.
 */
var userMongo = require("../model/mongodb/userMongo");
var userES = require("../model/elasticsearch/userES");
var userRedis = require("../model/redis/userRedis");
var logger = require("../tool/getLoggerTool");

/**
 * add user
 * @param user
 * @returns {Promise.<void>}
 */
async function addUser(user) {
    try {
        await userES.addUser(user);
        await userRedis.addUser(user);
        return await userMongo.addUser(user);
    } catch (e) {
        logger.error("addUser in userService in service error:" + e);
        throw e;
    }
}

/**
 * check if the username exists
 * @param username
 * @returns {Promise.<boolean>}
 */
async function existUser(username) {
    try {
        return await userRedis.existUser(username);
    } catch (e) {
        logger.error("existUser in userService in service error:" + e);
        throw e;
    }
}

/**
 * check if the email exists
 * @param email
 * @returns {Promise.<boolean>}
 */
async function existEmail(email) {
    try {
        return await userRedis.existEmail(email);
    } catch (e) {
        logger.error("existEmail in userService in service error:" + e);
        throw e;
    }
}

module.exports = {
    addUser: addUser,
    existUser: existUser,
    existEmail: existEmail
};