import React,{Component} from 'react';
import {observer} from 'mobx-react';
import {  observable,computed,extendObservable } from "mobx";
// store
class TodoList {
  @observable todos = [{
    title:'todo1',
    id:1,
    finished:false
  },
  {
    title:'todo1',
    id:2,
    finished:false
  },
  {
    title:'todo1',
    id:3,
    finished:false
  }
  ,
  {
    title:'todo1',
    id:4,
    finished:false
  }

];
  @computed get unfinishedTodoCount() {
      return this.todos.filter(todo => !todo.finished).length;
  }
}

// 
const TodoView = observer(({todo}) =>
    <li>
        <input
            type="checkbox"
            checked={todo.finished}
            onClick={() => todo.finished = !todo.finished}
        />{todo.title}
    </li>
)

@observer
class TodoListView extends Component {
    render() {
        return <div>
            <ul>
                {this.props.todoList.todos.map(todo =>
                    <TodoView todo={todo} key={todo.id} />
                )}
            </ul>
            Tasks left: {this.props.todoList.unfinishedTodoCount}
        </div>
    }
}

class AllStore{
  TodoList =TodoList()
}

const allS = new AllStore()

export default function(){
  return <div>
    <TodoListView todoList={new TodoList()} />
     <TodoListView todoList={allS.TodoList} />
  </div>
}
