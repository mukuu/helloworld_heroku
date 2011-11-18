// ejsモジュールを読み込む
var express = require('express'),
	ejs = require('ejs');

var app = express.createServer();

// bodyDecorderを指定しないとexpressがPOSTパラメータを処理してくれない
app.use(express.bodyParser());

// app.render('*.ejs')はejsテンプレートエンジンで処理させる
app.register('.ejs', ejs);

app.get('/', function(req, res) {
	// ejsテンプレートエンジンでレンダリング
	res.render('index.ejs');
});

app.post('/', function(req, res) {
	// req.bodyにPOSTパラメータがセットされるのでそのままテンプレートに渡す
	res.render('result.ejs', {locals: {message: 'テスト'}});
//	res.render('result.ejs', {locals: {message: req.body.url}});
});

app.listen(8174, '127.0.0.1');
