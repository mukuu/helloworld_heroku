// http��fs���W���[����ǂݍ���
var http = require('http'),
    fs = require('fs');
 
// http�T�[�o�̍쐬
http.createServer(function(req, res) {
    console.log("start");
    // index.html��ǂݍ���ŕ\��
    fs.readFile('index.html', function(err, content) {
        if (err) { throw err; }
        console.log("response end");
        res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
        res.end(content);
    });
    console.log("end");
    // index.html�̓ǂݍ��݂�҂����Ƀ��X�|���X��Ԃ�
    // res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    // res.end();
}).listen(8192, '127.0.0.1');
console.log('http://127.0.0.1:8192/');