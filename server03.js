// ���W���[���̓ǂݍ���
var express = require('express');

// �T�[�o���쐬
var app = express.createServer();

// '/'�̃��N�G�X�g�n���h��
app.get('/', function(req, res) {
	res.sendfile('index.html');
});

// �T�[�o�N��
app.listen(8124, '127.0.0.1');