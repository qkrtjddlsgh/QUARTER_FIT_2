// 본 예제는 Node.js 에서 주소좌표변환 api를 호출하는 예제입니다. (express 모듈 설치 필요)
var express = require('express');
var app = express.Router();

var client_id = 'Uuri286TO_0SEQFRbb7t';
var client_secret = 'BRnt6tr_Vt';

app.get('/geocode', function (req, res) {
    var api_url = 'https://openapi.naver.com/v1/map/geocode?query=' + encodeURI(req.query.query); // json
    var request = require('request');

    var options = {
        url: api_url,
        headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
    };

    request.get(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
            res.end(body);
        } else {
            res.status(response.statusCode).end();
            console.log('error = ' + response.statusCode);
        }
    });
});

module.exports = app;

/*app.listen(3000, function () {
    console.log('http://127.0.0.1:3000/geocode?query=주소 app listening on port 3000!');
});*/