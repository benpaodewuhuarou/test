/**
 * Created by shizekang on 4/9/2018.
 */
var elasticsearch = require('elasticsearch');
var esClient = new elasticsearch.Client({
    host: 'https://elastic:AYWW89m58X3aG56TnmtITTPu@a17ba90b99e22a57e6cc3fd75b596f40.us-east-1.aws.found.io:9243',
    log: 'error'
});

module.exports = esClient;