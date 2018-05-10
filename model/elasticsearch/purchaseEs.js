/**
 * Created by shizekang on 5/8/2018.
 */
var esClient = require("./getClientTool");
var logger = require('../../tool/getLoggerTool');

async function addPurchase(purchase) {
    try {
        await esClient.index({
            index: "purchase",
            type: "purchase",
            id: purchase.purchaseId,
            body: purchase
        });
        return purchase;
    } catch (e) {
        logger.error("addPurchase in purchaseEs error: " + e);
        throw e;
    }
}

module.exports = {addPurchase: addPurchase};