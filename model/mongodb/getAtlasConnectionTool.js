var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb://shizekang:qwer123456@cluster0-shard-00-00-aqa7y.mongodb.net:27017,cluster0-shard-00-01-aqa7y.mongodb.net:27017,cluster0-shard-00-02-aqa7y.mongodb.net:27017/?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";
var conn;

/**
 * get connection from mongodb atlas
 * @returns {Promise.<*>}
 */
async function getConn() {
    if (!conn) {
        var db = await MongoClient.connect(uri);
        conn = db;
        return db;
    }
    return conn;

}

module.exports = {getConn: getConn};

