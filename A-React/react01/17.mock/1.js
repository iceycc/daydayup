let Mock = require('mockjs');
let result = Mock.mock({
    "code":0,
    "message":"成功",
    "data|10":[
        {
            "id":"@id",
            "ip":"@ip",
            "name":"@cname",
            "userId":"@id",
            "avatar":"@image('200x100', '#894FC4', '#FFF', 'png', 'Hello')",
            "createAt":"@datetime"
        }
    ]
});
console.log(result);