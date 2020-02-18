let express = require('express');
const path = require('path');
let app = express();
let todos = [{ id: 1, text: '吃饭', completed: false }, { id: 2, text: '睡觉', completed: false }, { id: 3, text: '打豆豆', completed: false }]

app.get('/todos', function (req, res) {
    res.sendFile(path.join(__dirname, '7.todos.html'));
});
app.get('/toggle/:ids', function (req, res) {
    let ids = req.params.ids;
    ids = ids.split(',');
    todos = todos.map(todo => {
        if (ids.includes(todo.id + "")) {
            todo.completed = !todo.completed;
        }
        return todo;
    });
    res.json(todos);
});
app.get('/getTodos', function (req, res) {
    res.json(todos);
});
app.get('/images/loading.gif', (req, res) => {
    res.sendFile(path.join(__dirname, 'images', 'loading.gif'));
});
// 处理images
app.get('/images/:name', (req, res) => {
    setTimeout(function () {
        res.sendFile(path.join(__dirname, req.path));
    }, 1000);// 预加载
});
app.get('/lazy', function (req, res) {
    // 懒加载
    res.sendFile(path.join(__dirname, '4.lazy.html'));
});
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '3.loading.html'));
});
app.listen(8080);