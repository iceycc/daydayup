"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
exports.initialState = {
    todos: [],
};
function reducer(state, action) {
    if (state === void 0) { state = exports.initialState; }
    switch (action.type) {
        case ActionTodoConstants.ADD_TODO: {
            var todo = action.payload;
            return tslib_1.__assign(tslib_1.__assign({}, state), { todos: tslib_1.__spreadArrays(state.todos, [todo]) });
        }
        case ActionTodoConstants.TOGGLE_TODO: {
            var id_1 = action.payload.id;
            return tslib_1.__assign(tslib_1.__assign({}, state), { todos: state.todos.map(function (todo) { return (todo.id === id_1 ? tslib_1.__assign(tslib_1.__assign({}, todo), { done: !todo.done }) : todo); }) });
        }
        default:
            return state;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=todo.js.map