//Express フレームワークを読み込む
const express = require('express');
const app = express();
module.exports.app = app;

// ビューエンジンをejsにセットする
app.set('view engine', 'ejs');

const { pas_specify } = require('./file_and_pass_set.js');

//必要なデータを準備
app.use(express.static('views'));
app.use('views', express.static('views'));

pas_specify();

// ポート8082をオープンにする
app.listen(8000, function () {
  console.log('[NodeJS] Application Listening on Port 8000\n@ http://localhost:8000');
});