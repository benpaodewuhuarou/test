/**
 * Created by shizekang on 3/27/2018.
 */
var elasticsearch = require('elasticsearch');
var esClient = new elasticsearch.Client({
    host: 'https://elastic:AYWW89m58X3aG56TnmtITTPu@a17ba90b99e22a57e6cc3fd75b596f40.us-east-1.aws.found.io:9243',
    log: 'error'
});
var getLoggerTool = require('../../tool/getLoggerTool');
var logger = getLoggerTool.getLogger();

/**
 * add user to ElasticSearch
 * @param user
 * @returns {Promise.<*>}
 */
async function addUser(user) {
    try {
        var response = await esClient.index({
            index: 'shmall-user',
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