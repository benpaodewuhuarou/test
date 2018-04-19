/**
 * Created by shizekang on 3/28/2018.
 */
var redis = require("redis");
const bluebird = require("bluebird");
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);
var client = redis.createClient("11769", "redis-11769.c15.us-east-1-4.ec2.cloud.redislabs.com");
client.auth("b6aSqiav0OOhtB9BYJPkkr24tQE1jEJ6");
var logger = require('../../tool/getLoggerTool');

/**
 * add username collection and email collection to Redis
 * @param user
 * @returns {Promise.<void>}
 */
async function addUser(user) {
    try {
        await client.saddAsync(["username", user.username]);
        if (user.email) {
            await client.saddAsync(["email", user.email]);
        }
    } catch (e) {
        logger.error("addUser in userRedis error: " + e);
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
        var usernames = await client.smembersAsync("username");
        for (var i = 0; i < usernames.length; i++) {
            if (usernames[i] == username) {
                return true;
            }
        }
        return false;
    } catch (e) {
        logger.error("existUser in userRedis error: " + e);
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
        var emails = await client.smembersAsync("email");
        for (var i = 0; i < emails.length; i++) {
            if (emails[i] == email) {
                return true;
            }
        }
        return false;
    } catch (e) {
        logger.error("existEmail in userRedis error: " + e);
        throw e;
    }
}

module.exports = {
    addUser: addUser,
    existUser: existUser,
    existEmail: existEmail
};












async function test() {
    await addUser({username: "1qq11"});
}

test();

