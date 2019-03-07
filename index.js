// var server = require("./src/server")
//
// function route(pathname) {
//     console.log("About to route a request for " + pathname);
// }
// server.start(route);

var express = require('express');
var app = express();


app.all('*', function(req, res, next) {
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin","http://localhost:3000");
    //允许的header类型
    res.header("Access-Control-Allow-Headers","content-type");
    //跨域允许的请求方式
    res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET");
    if (req.method.toLowerCase() == 'options')
        res.send(200);  //让options尝试请求快速结束
    else
        next();
});

app.post("/",function(req,res){
    console.log("wwwwwww")
    res.send("数据回复1");
})


app.get('/', function(req, res){
    res.send('hello worldxxx');
});

app.listen(8080);