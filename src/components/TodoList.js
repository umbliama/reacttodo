import React, { Component } from "react";
import { observer } from "mobx-react";
import "../components/TodoList.css";

@observer
class TodoList extends Component {
  deleteTodo = taskId => {
    this.props.store.deleteTodo(taskId);
  };
  completedTodos = () => {
    this.props.store.todos.map(todo => console.log(todo.id));
  };
  render() {
    const store = this.props.store;
    return (
      <div>
        <ul>
          {store.todos.map(todo => (
            <li
              className={
                todo.isCompleted ? "completed--true" : "completed--false"
              }
              key={todo.id}
            >
              {todo.name}
              <span onClick={() => this.deleteTodo(todo.id)}>{todo.id}</span>
              <input
                type="checkbox"
                checked={store.completedTodos}
                onChange={this.completedTodos}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
