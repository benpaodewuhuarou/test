/**
 * Created by shizekang on 3/26/2018.
 */
var getCollectionTool = require("./getCollectionTool");
var logger= require('../../tool/getLoggerTool');

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







async function test() {
    var collection = await getCollectionTool.getCollection("user");
    console.log(await collection.find().toArray());
}

test();


