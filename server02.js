// fs���W���[�����ǂݍ���
var http = require('http'),
    fs = require('fs');

http.createServer(function(req, res) {
    // index.html ��ǂݍ���ŕ\��
    fs.readFile('index.html', function(err, content) {
        if (err) {
            throw err;
        }
        res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
        res.end(content);
    });
}).listen(8192, '127.0.0.1');