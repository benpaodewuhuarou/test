/**
 * Created by zhiyangwang on 5/4/2018.
 */
var getCollectionTool = require("./getCollectionTool");
var logger = require('../../tool/getLoggerTool');

async function addProduct(product) {
    try {
        var collection = await getCollectionTool.getCollection("product");
        var insertInfo = await collection.insertOne(product);
        return insertInfo.ops[0];
    } catch (e) {
        logger.error("addProduct in productMongo error: " + e);
        throw e;
    }
}

module.exports = { addProduct: addProduct };