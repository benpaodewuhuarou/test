/**
 * Created by zhiyangwang on 3/27/2018.
 */
var connection = require("./getAtlasConnectionTool");

/**
 * get collection
 * @returns {Promise.<*>}
 */
async function getCollection(collectionName) {
    var conn = await connection.getConn();
    collection = await conn.db("second").collection(collectionName);
    return collection;
}

module.exports = { getCollection: getCollection };