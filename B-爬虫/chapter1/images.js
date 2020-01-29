// 引入http模块
const http = require('./node_modules/http')
// 创建请求对象
let req = http.request('http://web.itheima.com/teacher.html', res => {
  // 准备chunks
  let chunks = []
  res.on('data', chunk => {
    // 监听到数据就存储
    chunks.push(chunk)
  })
  res.on('end', () => {
    // 结束数据监听时讲所有内容拼接
    console.log(Buffer.concat(chunks).toString('utf-8'))
  })
})
// 发送请求
req.end()