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
    http = require('http');

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
      // �X�e�[�^�X�R�[�h�ƃw�b�_�[�̏o��
      console.log(response.statusCode);
      for(var i in response.headers){
         console.log(i + ": " + response.headers[i]);
      }
      console.log('');
      // �f�[�^�擾�C�x���g�̔񓯊�����
      response.setEncoding('utf8');
      response.on('data', function(chunk){
         // chunk �͎�M�����f�[�^ (�f�t�H���g��UTF8 �G���R�[�h)
         util.print(chunk);
      });
      // ���X�|���X�I���C�x���g�̔񓯊�����
      response.on('end', function(){
         console.log('');
      });
   });
}

// �������w�肵�Ď��s
download(process.argv[2]);