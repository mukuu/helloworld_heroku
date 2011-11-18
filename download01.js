/**
 * download1.js - 指定したURLからデータをダウンロードしながら標準出力に表示
 *
 * usage:
 *    node download1.js URL
 *
 */

// モジュール読み込み
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
   request.end(); // リクエストの送信終了
   // response イベントの非同期処理
   request.on('response', function(response){
      // ステータスコードとヘッダーの出力
      console.log(response.statusCode);
      for(var i in response.headers){
         console.log(i + ": " + response.headers[i]);
      }
      console.log('');
      // データ取得イベントの非同期処理
      response.setEncoding('utf8');
      response.on('data', function(chunk){
         // chunk は受信したデータ (デフォルトでUTF8 エンコード)
         util.print(chunk);
      });
      // レスポンス終了イベントの非同期処理
      response.on('end', function(){
         console.log('');
      });
   });
}

// 引数を指定して実行
download(process.argv[2]);