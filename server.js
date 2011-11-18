// httpとfsモジュールを読み込む
var http = require('http'),
    fs = require('fs');
 
// httpサーバの作成
http.createServer(function(req, res) {
    console.log("start");
    // index.htmlを読み込んで表示
    fs.readFile('index.html', function(err, content) {
        if (err) { throw err; }
        console.log("response end");
        res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
        res.end(content);
    });
    console.log("end");
    // index.htmlの読み込みを待たずにレスポンスを返す
    // res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    // res.end();
}).listen(8192, '127.0.0.1');
console.log('http://127.0.0.1:8192/');