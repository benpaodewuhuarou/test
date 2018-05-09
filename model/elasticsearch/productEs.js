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

async function addProduct(product) {
    try {
        await esClient.index({
            index: "product",
            type: "product",
            id: product.itemId,
            body: product
        });
        return product;
    } catch (e) {
        logger.error("addProduct in productEs error: " + e);
        throw e;
    }
}

async function getProductById(itemId) {
    try {
        var response = await esClient.search({
            index: "product",
            type: "product",
            body: {
                query: {
                    match: {
                        itemId: itemId
                    }
                }
            }
        });
        var result = {};
        if (response && response.hits && response.hits.hits) {
            result = response.hits.hits[0]._source;
        }
        return result;
    } catch (e) {
        logge.error("getProductById in productES error: " + e);
        throw e;
    }
}

async function searchProduct(condition) {
    try {
        var response = await esClient.search({
            index: "product",
            type: "product",
            body: {
                query: {
                    multi_match: {
                        fields: ["title", "type", "location", "detail", "transmode"],
                        query: condition,
                        fuzziness: "AUTO"
                    }
                }
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
        logger.error("searchProduct in productEs error: " + e);
        throw e;
    }
}

module.exports = {
    getIndexProduct: getIndexProduct,
    getProductByType: getProductByType,
    addProduct: addProduct,
    getProductById: getProductById,
    searchProduct: searchProduct
};
