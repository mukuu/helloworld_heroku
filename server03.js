// モジュールの読み込み
var express = require('express');

// サーバを作成
var app = express.createServer();

// '/'のリクエストハンドラ
app.get('/', function(req, res) {
	res.sendfile('index.html');
});

// サーバ起動
app.listen(8124, '127.0.0.1');