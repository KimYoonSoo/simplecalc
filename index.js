var express = require('express');
var app = express();

app.get("/", (req, res) => {
    res.send("Hello Calc");
});

// local:8888/add?p1=10&p2=20
// https://wayhome25.github.io/nodejs/2017/02/18/nodejs-11-express-query-string/
// https://gongbu-ing.tistory.com/26 
app.get("/add", (req, res) => {
    var p1 = req.param('p1');
    var p2 = req.param('p2');
    var result = Number(p1) + Number(p2);
 
    res.send("Result : " + result);
});

app.listen(8888);