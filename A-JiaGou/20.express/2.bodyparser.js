const express = require("express");
// const bodyparser = require("body-parser");
const app = express();
let bodyparser = {
  json() {
    console.log("json");
    return (req, res, next) => {
      if (req.headers["content-type"] === "application/json") {
        let arr = [];
        req.on("data", function(chunk) {
          arr.push(chunk);
        });
        req.on("end", function() {
          req.body = JSON.parse(Buffer.concat(arr));
          next();
        });
      } else {
        next();
      }
    };
  },
  urlencoded() {
    return (req, res, next) => {
      if (req.headers["content-type"] === "application/x-www-form-urlencoded") {
        let arr = [];
        req.on("data", function(chunk) {
          arr.push(chunk);
        });
        req.on("end", function() {
          console.log(arr, "end");
          req.body = require("querystring").parse(
            Buffer.concat(arr).toString()
          );
          next();
        });
      } else {
        next();
      }
    };
  }
};
// multer
app.use(bodyparser.json()); // 解析josn  {a:1,b:2} 
app.use(bodyparser.urlencoded()); // 解析 a=1&b=2
app.post("/login", (req, res) => {
  console.log(req.body);
});
app.listen(3000);
