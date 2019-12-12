let fs = require('fs');
let path = require('path')
let pathUrl = path.resolve(__dirname, './c/b/c/d/e');
console.log(pathUrl)
const mkdir = (pathUrl, cb) => { // next
  let pathArr = pathUrl.split('/');
  console.log(pathArr)
  function next(index) {
    // 递归必须要有终止条件
    if (index === pathArr.length) return cb(); // 递归终止条件
    let current = pathArr.slice(0, ++index).join('/'); // 当前层级目录
    fs.access(current, (err, data) => {
      if (err) {
        fs.mkdir(current, function () {
          next(index); // 当前创建完毕后 创建下一次即可
        });
      } else { // 如果存在，创建下一层
        next(index);
      }
    })
  }
  next(0);
}
mkdir(pathUrl, function () {
  console.log('成功')
});