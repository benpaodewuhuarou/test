/**
 * Created by shizekang on 3/27/2018.
 */
var esClient = require("./getClientTool");
var logger = require('../../tool/getLoggerTool');

/**
 * add user to ElasticSearch
 * @param user
 * @returns {Promise.<*>}
 */
async function addUser(user) {
    try {
        var response = await esClient.index({
            index: 'user',
            id: user.username,
            type: 'user',
            body: user
        });
        return response;
    } catch (e) {
        logger.error("addUser in userES error: " + e);
        throw e;
    }
}

/**
 * login verify
 * @param user
 * @returns {Promise.<boolean>}
 */
async function login(user) {
    try {
        var response = await esClient.search({
            index: "user",
            type: "user",
            body: {
                query: {match: {username: user.username, password: user.password}}
            }
        });
        if (response.hits.hits.length == 0) {
            return false;
        }
        return true;
    } catch (e) {
        logger.error("login in userEs error: " + e);
        throw e;
    }
}

module.exports = {
    addUser: addUser,
    login: login
};