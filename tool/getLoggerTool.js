/**
 * Created by zhiyangwang on 3/27/2018.
 */
var path = require('path');
var log4js = require('log4js');

function getLogger() {
    log4js.configure({
        appenders: { secondhandmall: { type: 'file', filename: path.join(__dirname + '/log/logfile.log') } },
        categories: { default: { appenders: ["secondhandmall"], level: 'error' } }
    });
    var logger = log4js.getLogger("secondhandmall");
    return logger;
}

module.exports = getLogger();