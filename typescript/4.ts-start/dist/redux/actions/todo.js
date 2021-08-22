"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todo_1 = require("../constants/todo");
var id = 0;
var addTodo = function (name) { return ({
    payload: {
        todo: {
            done: false,
            id: id++,
            name: name,
        },
    },
    type: todo_1.ActionTodoConstants.ADD_TODO,
}); };
var toggleTodo = function (id) { return ({
    payload: id,
    type: todo_1.ActionTodoConstants.ADD_TODO,
}); };
//# sourceMappingURL=todo.js.map