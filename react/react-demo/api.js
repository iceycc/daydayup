let express = require('express');
let app = express();
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    next();
});
app.get('/api/users', function (req, res) {
    let offset = parseInt(req.query.offset);//偏移量 
    let limit = parseInt(req.query.limit);//每页的条数
    let result = [];
    for (let i = offset; i < offset + limit; i++) {
        result.push({ id: i + 1, name: 'name' + (i + 1) });
    }
    res.json(result);
});
app.listen(8000);