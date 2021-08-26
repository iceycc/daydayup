const loaderUtils = require("loader-utils");
const fs = require("fs");
const path = require("path");
// 同步loader
// 异步loader
module.exports = function (source) {
  const { name } = loaderUtils.getOptions(this);
  console.log('name', name);

  const url = loaderUtils.interpolateName(this, "[name].[ext]", {
    source,
  });
  console.log(url);
  this.emitFile(path.join(__dirname, url), source);
  // this.cacheable(false); // 关闭缓存

  // 异步loader -
//   const callback = this.async(); 
//   fs.readFile(path.join(__dirname, "./async.txt"), "utf-8", (err, data) => {
//     if (err) {
//       callback(err, "");
//     }
//     callback(null, data);
//   });
  // 

  const json = JSON.stringify(source)
    .replace("foo", "")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");

  //

  // throw new Error('Error');
  // this.callback(new Error('Error'))

  return `export default ${json}`;
  // this.callback(null, json, 2, 3, 4);

};
