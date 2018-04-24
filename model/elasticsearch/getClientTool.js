/**
 * Created by shizekang on 4/9/2018.
 */
var elasticsearch = require('elasticsearch');
var esClient = new elasticsearch.Client({
    host: "https://search-shmall-ygfvbrtwgjjnn7ol2x4eppaave.us-west-2.es.amazonaws.com/",
    log: 'error'
});

module.exports = esClient;
