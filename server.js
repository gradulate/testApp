/**
 * Created by lena on 20.03.15.
 */
var express = require('express');
var app = express();
var loger = require('morgan');

app.use(muCustomSteck);
app.use(loger('dev'));

function muCustomSteck(req, res, next){
    console.log(reg.headers['user-agent']);
    var pos = (req.ip).lastIndexOf(':');
    var s = (reg.ip).substr(pos+1);
    console.log(s);
    var acceptedIps = ['192.168.88.43'];
    if(s === acceptedIps[i]){
        next()
    }
    else {
        next('Access denied');
    }
}

require('./routers/index.js'); //(app)


app.listen(3030, function(){
    console.log('---------Express start success-----------');
});

