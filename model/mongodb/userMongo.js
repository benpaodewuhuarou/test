/**
 * Created by shizekang on 3/26/2018.
 */
var getCollectionTool = require("./getCollectionTool");
var logger= require('../../tool/getLoggerTool');

/**
 * add user to mongodb atlas
 * @param user
 * @returns {Promise.<*|Number|number>}
 */
async function addUser(user) {
    try {
        var collection = await getCollectionTool.getCollection("user");
        var insertInfo = await collection.insertOne(user);
        return insertInfo.ops[0];
    } catch (e) {
        logger.error("addUser in userMongo file error: " + e);
        throw e;
    }
}

module.exports = {
    addUser: addUser,
};




<<<<<<< HEAD
// async function test() {
//     var collection = await getCollectionTool.getCollection("user");
//     console.log(await collection.find().toArray());
//     console.log("dd");
// }

// test();
=======


async function test() {
    var collection = await getCollectionTool.getCollection("user");
    // console.log(await collection.insertOne({ username: '1qqq11',
    //     gmail: '',
    //     email: '658912539@qq.com',
    //     password: '2b97cb3305e4b85ba2ba904cecff5601',
    //     address: '',
    //     phoneNumber: '',
    //     wechat: '',
    //     restrict: 'false',
    //     credit: '100',
    //     administrator: 'false'}));
    // console.log(await collection.deleteOne({username: "1qqq11", password: "111111111111111111"}));
    console.log(await collection.find().toArray());
}

test();


>>>>>>> 0c576f4cbfd8c94dd8934af5cd3ae09cc5ab7590
