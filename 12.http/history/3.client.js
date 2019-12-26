const http = require("http");
// 中间层 不会跨域 浏览器
// http.get()
  // 客户端的http请求是可写流
let client = http.request(
  // 爬取页面dom元素
  {
    // req
    hostname: "localhost",
    port: 8080,
    headers: {
      a: 1,
      //   "Content-Type": "application/x-www-form-urlencoded",
        "Content-Type": "application/json",
      // "Content-Type": "text/plain"
    },
    method: "post"
  },
  function(res) {
    // 客户端的响应是可读流
    res.on("data", function(chunk) {
      console.log(chunk.toString());
    });
  }
);
// 写入一些内容
let r = encodeURIComponent(`你`);
client.write(r); // 为了能发送请求体。可写流
client.end();

// 客户端和服务端之间的通信
