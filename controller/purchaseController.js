/**
 * Created by shizekang on 5/8/2018.
 */
const purchaseService = require("../service/purchaseService");
const logger = require("../tool/getLoggerTool");
const express = require('express');
const router = express.Router();
const uuid = require("node-uuid");

router.put("/addPurchase", async function (req, res) {
    var result = {};
    try {
        var purchase = req.body;
        var purchaseId = uuid.v4();
        var date = Date.now();
        var username = req.user.username;
        purchase.purchaseId = purchaseId;
        purchase.date = date;
        purchase.username = username;
        var purchase = await purchaseService.addPurchase(purchase);
        result["status"] = 200;
        result["message"] = "add purchase success";
        result["data"] = purchase;
    } catch (e) {
        logger.error("addPurchase error in error: " + e);
        result["status"] = 400;
        result["message"] = "addPurchase fail";
    }
    res.send(result);
});

module.exports=router;