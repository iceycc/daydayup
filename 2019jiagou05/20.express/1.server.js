const express = require("express");
const app = express();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

app.use(express.static(__dirname));
// 文件上传
app.post("/upload", upload.single("avatar"), function(req, res) {
  res.send("ok");
});
app.listen(3000);
