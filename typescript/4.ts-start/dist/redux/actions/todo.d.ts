import { ActionTodoConstants } from '../constants/todo';
import { Todo } from '../models/Todo';
export interface AddTodoAction {
    type: ActionTodoConstants.ADD_TODO;
    payload: {
        todo: Todo;
    };
}
export interface ToggleTodoAction {
    type: ActionTodoConstants.TOGGLE_TODO;
    payload: {
        id: number;
    };
}
export declare type Action = AddTodoAction | ToggleTodoAction;
