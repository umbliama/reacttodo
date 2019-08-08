import React, { Component } from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";

@observer
class TodoList extends Component {
  deleteTodo = taskId => {
    this.props.store.deleteTodo(taskId);
  };
  render() {
    const store = this.props.store;
    return (
      <div>
        <ul>
          {store.todos.map(todo => (
            <li key={todo.id}>
              {todo.id}
              {todo.name}{" "}
              <span onClick={event => this.deleteTodo(todo.id)}>{todo.id}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
