/**
 * Created by shizekang on 4/9/2018.
 */
var esClient = require("./getClientTool");
var logger = require('../../tool/getLoggerTool');

/**
 * get the 20 products for the index page
 * @returns {Promise.<Array>}
 */
async function getIndexProduct() {
    try {
        var response = await esClient.search({
            index: "product",
            type: "product",
            body: {
                sort: [{"date": {"order": "desc"}}],
                query: {match_all: {}},
                size: 20
            }
        });
        var result = [];
        if (response && response.hits && response.hits.hits) {
            for (var i = 0; i < response.hits.hits.length; i++) {
                result.push(response.hits.hits[i]._source);
            }
        }
        return result;
    } catch (e) {
        logger.error("indexProduct error in productEs: " + e);
        throw e;
    }
}

/**
 * get product by the type, page number and size
 * @param type
 * @param from
 * @param size
 * @returns {Promise.<Array>}
 */
async function getProductByType(type, from, size) {
    try {
        var response = await esClient.search({
            index: "product",
            type: "product",
            body: {
                sort: [{"date": {"order": "desc"}}],
                query: {match: {type: type}},
                from: from,
                size: size
            }
        });
        var result = [];
        if (response && response.hits && response.hits.hits) {
            for (var i = 0; i < response.hits.hits.length; i++) {
                result.push(response.hits.hits[i]._source);
            }
        }
        return result;
    } catch (e) {
        logger.error("getProductByType error in productEs: " + e);
        throw e;
    }
}
module.exports = {
    getIndexProduct: getIndexProduct,
    getProductByType: getProductByType
};
