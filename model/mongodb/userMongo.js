/**
 * Created by shizekang on 3/26/2018.
 */
var getCollectionTool = require("./getCollectionTool");
var getLoggerTool = require('../../tool/getLoggerTool');
var logger = getLoggerTool.getLogger();

/**
 * add user to mongodb atlas
 * @param user
 * @returns {Promise.<*|Number|number>}
 */
async function addUser(user) {
    try {
        var collection = await getCollectionTool.getCollection("user");
        var insertInfo = await collection.insertOne(user);
        return insertInfo.insertedCount;
    } catch (e) {
        logger.error("addUser in userMongo file error: " + e);
        throw e;
    }
}

module.exports = {
    addUser: addUser,
};

