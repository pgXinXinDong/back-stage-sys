var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/antd";

MongoClient.connect(url,function(err,db){
    if(err) throw err
    console.log("数据库已经连接")
    var dbo = db.db("antd");

    var mysort = {age : 1 };
    dbo.collection("user").find().sort({ type: 1 }).skip(1).limit(3).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });




})
module.exports = MongoClient