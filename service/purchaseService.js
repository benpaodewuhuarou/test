/**
 * Created by shizekang on 5/8/2018.
 */

var logger = require("../tool/getLoggerTool");
var purchaseEs = require("../model/elasticsearch/purchaseEs");
var purchaseMongo = require("../model/mongodb/purchaseMongo");

async function addPurchase(purchase) {
    try {
        await purchaseEs.addPurchase(purchase);
        return await purchaseMongo.addPurchase(purchase);
    } catch (e) {
        logger.error("addPurchase in purchaseService error: " + e);
        throw e;
    }
}

module.exports = {addPurchase: addPurchase};