/**
 * Created by shizekang on 3/24/2018.
 */
const elasticsearch = require('elasticsearch');
const esClient = new elasticsearch.Client({
    host: 'https://elastic:AYWW89m58X3aG56TnmtITTPu@a17ba90b99e22a57e6cc3fd75b596f40.us-east-1.aws.found.io:9243',
    log: 'error'
});


// esClient.index({
//     index: 'shmall-user',
//     id: '1qqq11',
//     type: 'user',
//     body: {
//         "username" : "1qqq11",
//         "email" : "658912539@qq.com",
//         "password" : "111111111111111111",
//         "address" : "",
//         "phoneNumber" : "",
//         "wechat" : "",
//         "restrict" : "false",
//         "credit" : "100",
//         "administrator" : "false"
//     }
// },function(err,resp,status) {
//     console.log(resp);
// });


// esClient.create({
//     index: 'shmall-product',
//     type: 'product',
//     id: '888888888888',
//     body: {
//         "itemId" : "888888888888",
//         "title" : "testTitle2",
//         "type" : "3C",
//         "allowed" : "true",
//         "username" : "1qqq11",
//         "price" : "$60.00",
//         "degree" : "90",
//         "location" : "Jersey City",
//         "phoneNumber" : "5513236575",
//         "wechat" : "xx1254654321143",
//         "email" : "21321@shmall.com",
//         "transmode" : "offline",
//         "image" : [
//             "",
//             "",
//             ""
//         ],
//         "date" : "2018-1-25",
//         "detail" : "It's test item!! don't pay it.",
//         "deleted" : "false"
//     }
// }, function (error, response) {
//     console.log(response);
// });

// esClient.delete({
//     index: 'shmall',
//     type: 'user',
//     id: '1qq7733332'
// }, function (error, response) {
//     console.log(response);
// });

// esClient.get({
//     index: 'shmall-product',
//     type: 'prduct',
//     id: '99999999999'
// }, function (error, response) {
//     console.log(response);
// });


//
// esClient.search({
//     index: 'shmall-user',
//     type: 'user',
//     body: {
//         query: {
//             match: { "username": "1qqq11" }
//         },
//     }
// }, function (error, response) {
//     for (var i = 0; i < response.hits.hits.length; i++) {
//         console.log(response.hits.hits[i]);
//     }
// });


// let bulkBody = [];
//
// bulkBody.push({
//     index: {
//         _index: "shmall",
//         _type: "user",
//         _id: "1qq11"
//     }
// });
//
// bulkBody.push({ _id: "5ab2a683532bd5023ed0befa",
//     username: '1qq11',
//     email: '658939539@qq.com',
//     password: '111111111111111111',
//     address: '',
//     phoneNumber: '',
//     wechat: '',
//     restrict: 'false',
//     credit: '100',
//     administrator: 'false' }
// );
//
// async function importData() {
//     var result = await esClient.bulk({body: bulkBody});
//     console.log(result.items);
// }


//importData();

// var http = require('http');
//
// // ElasticSearch Expects JSON not Querystring!
// var data = JSON.stringify({
//     username: '1qq11',
//     email: '658939539@qq.com',
//     password: '111111111111111111',
//     address: '',
//     phoneNumber: '',
//     wechat: '',
//     restrict: 'false',
//     credit: '100',
//     administrator: 'false'
// });
//
// // An object of options to indicate where to post to
// var post_options = {
//     host: 'localhost',
//     port: '9200',
//     path: '/shmall/user/1qq11',
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'Content-Length': Buffer.byteLength(data)
//     }
// };
//
// // Set up the request
// var post_req = http.request(post_options, function(res) {
//     res.setEncoding('utf8');
//     res.on('data', function (chunk) {
//         console.log('Response: ' + chunk);
//     });
// });
//
// // post the data
// post_req.write(data);
// post_req.end();