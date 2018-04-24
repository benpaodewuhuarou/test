/**
 * Created by shizekang on 3/24/2018.
 */
const elasticsearch = require('elasticsearch');
const esClient = new elasticsearch.Client({
    //host: 'https://elastic:AYWW89m58X3aG56TnmtITTPu@a17ba90b99e22a57e6cc3fd75b596f40.us-east-1.aws.found.io:9243',
    host: "https://search-shmall-ygfvbrtwgjjnn7ol2x4eppaave.us-west-2.es.amazonaws.com/",
    log: 'error'
});


// esClient.index({
//     index: 'productindex',
//     type: 'prodcut',
//     id: '1',
//     body: {
//         "username" : "1qqq11",
//     }
// },function(err,resp,status) {
//     console.log(resp);
// });

// { itemId: '99999999999',
//     title: 'testTitle',
//     type: '3C',
//     allowed: 'true',
//     username: '1qqq11',
//     price: '$60.00',
//     degree: '90',
//     location: 'Jersey City',
//     phoneNumber: '5513236575',
//     wechat: 'xx1254654321143',
//     email: '1111111@shmall.com',
//     transmode: 'offline',
//     image: [ '', '', '' ],
//     date: 1523243670009,
//     detail: 'It\'s test item!! don\'t pay it.',
//     deleted: 'false' }

// esClient.delete({
//     index: 'test11',
//     type: 'test111',
//     id: "8"
// }, function (error, response) {
//     console.log(response);
// });


// esClient.create({
//     index: 'productindex',
//     type: 'product',
//     id: '888888888888',
//     body: {
//         itemId: '888888888888',
//         dd: "11"
//         // title: 'testTitle2',
//         // type: '3C',
//         // allowed: 'true',
//         // username: '1qqq11',
//         // price: 60.00,
//         // degree: '90',
//         // location: 'Jersey City',
//         // phoneNumber: '5513236575',
//         // wechat: 'xx1254654321143',
//         // email: '21321@shmall.com',
//         // transmode: 'offline',
//         // image: [ '', '', '' ],
//         // date: Date.now(),
//         // detail: 'It\'s test item!! don\'t pay it.',
//         // deleted: 'false'
//     }
// }, function (error, response) {
//     console.log(response);
// });


// esClient.create({
//     index: 'test11',
//     type: "test111",
//     id: '8',
//     body: {
//         itemId: '8',
//         gg: 5,
//         date: Date.now()
//     }
// }, function (error, response) {
//     console.log(response);
// });
//
//
// esClient.index({
//     index: "user",
//     type: "user",
//     id: '1qqq11',
//     body: {
//         username: '1qqq11',
//         gmail: '',
//         email: '658912539@qq.com',
//         password: '2b97cb3305e4b85ba2ba904cecff5601',
//         address: '',
//         phoneNumber: '',
//         wechat: '',
//         restrict: 'false',
//         credit: '100',
//         administrator: 'false' }
// }, function (error, response) {
//     console.log(response);
// });



// esClient.get({
//     index: 'shmall',
//     type: 'shmall-product',
//     id: '888888888888'
// }, function (error, response) {
//     console.log(response);
// });



esClient.search({
    index: 'user',
    type: 'user',
    body: {
        //sort: [{date: {order: "asc"}}],
        query: {match_all : {}}
    }
}, function (error, response) {
    // console.log(response);
    for (var i = 0; i < response.hits.hits.length; i++) {
        console.log(response.hits.hits[i]);
    }
});


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