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

module.exports = {
    addUser: addUser
};