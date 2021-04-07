// http://www.ayqy.net/blog/node-js%e4%bb%8e%e5%ad%97%e7%ac%a6%e4%b8%b2%e7%94%9f%e6%88%90%e6%96%87%e4%bb%b6%e6%b5%81/
const fs = require('fs');
const path = require('path');
var FormData = require('form-data');

var form = new FormData();
form.append('file', fs.createReadStream(path.join(__dirname,'08.zip')));
form.submit('http://127.0.0.1:8150/nodeapi/files', function(err, res) {
  if (err) throw err;
  console.log(res.statusCode);
});