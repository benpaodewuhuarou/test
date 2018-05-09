/**
 * Created by shizekang on 4/9/2018.
 */
const productService = require("../service/productService");
const logger = require("../tool/getLoggerTool");
const express = require('express');
const router = express.Router();
const fs = require("fs");
const multiparty = require("connect-multiparty");
const multi = multiparty();
const uuid = require("node-uuid");
const fomidable = require("formidable");

//var upload = multi({dest: "./public/"});

module.exports = () => {
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

    //router.use(multiparty({uploadDir: "./resource/images"}));

    router.get('/', (res, req) => {
        req.send('ddddd');
    })
    router.get("/getIndexProduct", async function(req, res) {
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
    router.get("/getProductByType", async function(req, res) {
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

    router.put("/addProduct", async function (req, res) {
        var result = {};
        try {
            var id = uuid.v4();
            var product = req.body;
            product.itemId = id;
            product.date = Date.now();
            product.username = "1qqq11";
            var product = await productService.addProduct(product);
            result["status"] = 200;
            result["message"] = "add product successfully";
            result["data"] = product;
        } catch (e) {
            logger.error("addProduct in productController error: " + e);
            result["status"] = 400;
            result["message"] = "add product fail";
        }
        res.send(result);
    });

    router.post("/upload", multi, function (req, res, next) {
        console.log(req.files);
        // for (var i = 0; i < req.files.length; i++) {
        // //
        // }
        var path = req.files.file.path;
        var image = path.substring(path.lastIndexOf("\\") + 1);
        var newpath = __dirname + "/resource/images/" + image;
        fs.rename(path, newpath, function () {
            res.send("/resource/images/" + image);
        })
        // var oldpath = __dirname + "/../" + req.file.path;
        // var newpath = __dirname + ;
        // fs.rename(oldpath, newpath, function () {
        //
        // })
        // var result = {};
        // try {
        //     var files = req.files;
        //     console.log(files.path);
        //     result["status"] = 200;
        //     result["message"] = "upload successfully";
        //     result["data"] = files.path;
        // } catch (e) {
        //     logger.error("upload in productController error: " + e);
        //     result["status"] = 400;
        //     result["message"] = "upload fail";
        // }
        // res.send(result);
    });

    router.get("/getProductById", async function (req, res) {
        var result = {};
        try {
            var product = await productService.getProductById(req.query.itemId);
            result["status"] = 200;
            result["message"] = "getProductById successfully"
            result["data"] = product;
        } catch (e) {
            logger.error("getProductById in productController error: " + e);
            result["status"] = 400;
            result["message"] = "getProductById fail";
        }
        res.send(result);
    });

    router.get("/searchProduct", async function(req, res) {
        result = {};
        try {
            var condition = req.query.condition;
            var result = await productService.searchProduct(condition);
            result["status"] = 200;
            result["message"] = "searchProduct successfully";
            result["data"] = result;
        } catch (e) {
            logger.error("searchProduct in productController error: " + e);
            result["status"] = 400;
            result["message"] = "search fail";
        }
        res.send(result);
    })

    return router;
}