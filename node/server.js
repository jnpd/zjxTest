/**
 * Created by Administrator on 2015/9/4 0004.
 */
var http = require('http');
var fs = require('fs');
hhtp.createServer('./index.html',function(req,res){
    console.log(url);
    req.readFile('./index.html',function(err,data){
         res.write(data);
    })
    res.end("over");
}).listen(8080);