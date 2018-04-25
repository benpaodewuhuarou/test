/**
 * Created by shizekang on 4/9/2018.
 */
var productService = require("../service/productService");
var logger = require("../tool/getLoggerTool");
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());

/**
 * get 20 products for home page order by date, the data is a list for products
    [{ itemId: '888888888888',
     title: 'testTitle2',
     type: '3C',
     allowed: 'true',
     username: '1qqq11',
     price: 60,
     degree: '90',
     location: 'Jersey City',
     phoneNumber: '5513236575',
     wechat: 'xx1254654321143',
     email: '21321@shmall.com',
     transmode: 'offline',
     image: [ '', '', '' ],
     date: 1523292913432,
     detail: 'It\'s test item!! don\'t pay it.',
     deleted: 'false' }]
 * @returns {Promise.<void>}
 */
app.get("/getIndexProduct", async function (req, res) {
    var result = {};
    try {
        var data = await productService.getIndexProduct();
        result["status"] = 200;
        result["message"] = "get products successfully";
        result["data"] = data;
    } catch (e) {
        logger.error("getIndexProduct error in productController: " + e);
        result["status"] = 400;
        result["message"] = "get products failed"
    }
    res.send(result);
})

/**
 * get product by the type, page number and size. The data is a list for products:
 [{ itemId: '888888888888',
     title: 'testTitle2',
     type: '3C',
     allowed: 'true',
     username: '1qqq11',
     price: 60,
     degree: '90',
     location: 'Jersey City',
     phoneNumber: '5513236575',
     wechat: 'xx1254654321143',
     email: '21321@shmall.com',
     transmode: 'offline',
     image: [ '', '', '' ],
     date: 1523292913432,
     detail: 'It\'s test item!! don\'t pay it.',
     deleted: 'false' }]
 * @param type
 * @param from
 * @param size
 * @returns {Promise.<Array>}
 */
app.get("/getProductByType", async function (req, res) {
    var result = {};
    try {
        var data = await productService.getProductByType(req.query.type, req.query.from, req.query.size);
        result["status"] = 200;
        result["message"] = "get product By Type successfully";
        result["data"] = data;
    } catch (e) {
        logger.error("getProductByType error in productController: " + e);
        result["status"] = 400;
        result["message"] = "get product By Type failed"
    }
    res.send(result);
});

app.listen(3000, async function () {
    console.log("The http interface server starts!!! Port:3000");
})


