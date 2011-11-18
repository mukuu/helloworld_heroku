/**
 * download1.js - �w�肵��URL����f�[�^���_�E�����[�h���Ȃ���W���o�͂ɕ\��
 *
 * usage:
 *    node download1.js URL
 *
 */

// ���W���[���ǂݍ���
var util = require('util'),
    url = require('url'),
    http = require('http'),
    math = require('math');

function download(urlStr){
   var u = url.parse(urlStr);
   var client = http.createClient(u.port || 80, u.hostname);
   var request = client.request('GET',
                                u.pathname,
                                {
                                   host: u.hostname
                                });
   request.end(); // ���N�G�X�g�̑��M�I��
   // response �C�x���g�̔񓯊�����
   request.on('response', function(response){
      // �ꊇ�o�͂̃o�b�t�@
      var buf;
      
      // �f�[�^�擾�C�x���g�̔񓯊�����
      response.setEncoding('utf8');
      response.on('data', function(chunk) {
         // chunk �͎�M�����f�[�^ (�f�t�H���g��UTF8 �G���R�[�h)
         buf += chunk;
         // util.print(chunk);
      });
      // ���X�|���X�I���C�x���g�̔񓯊�����
      response.on('end', function(){
      	console.log(response.statusCode);
        for (var i in response.headers) {
        	console.log(i + "�F " + response.headers[i]);
        }
        
        console.log('');
        util.print(buf);
        console.log('');
      });
   });
}

// �������w�肵�Ď��s
var argv = process.argv;
for (var i = 0; i < argv.length; i++) {
	download(argv[i]);
}