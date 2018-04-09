/**
 * Created by shizekang on 4/9/2018.
 */
var productEs = require("../model/elasticsearch/productEs");
var logger = require("../tool/getLoggerTool");

/**
 * get 20 products for home page
 * @returns {Promise.<Array>}
 */
async function getIndexProduct() {
    try {
        return await productEs.getIndexProduct();
    } catch (e) {
        logger.error("getIndexProduct error in productService error: " + e);
        throw e;
    }
}

module.exports = {getIndexProduct: getIndexProduct};