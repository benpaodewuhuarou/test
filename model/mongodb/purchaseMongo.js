/**
 * Created by shizekang on 5/8/2018.
 */
var getCollectionTool = require("./getCollectionTool");
var logger = require('../../tool/getLoggerTool');

async function addPurchase(purchase) {
    try {
        var collection = await getCollectionTool.getCollection("purchase");
        var insertInfo = await collection.insertOne(purchase);
        return insertInfo.ops[0];
    } catch (e) {
        logger.error("addPurchase in purchaseMongo file error: " + e);
        throw e;
    }
}

module.exports = {addPurchase: addPurchase};