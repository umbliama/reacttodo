import React, { Component } from "react";
import { observer } from "mobx-react";
import "../components/TodoList.css";

@observer
class TodoList extends Component {
  deleteTodo = taskId => {
    this.props.store.deleteTodo(taskId);
  };
  completeTodo = todo => {
    this.props.store.completeTodo(todo);
  };

  render() {
    const store = this.props.store;
    return (
      <div>
        <ul>
          {store.todos.map(todo => (
            <li key={todo.id}>
              <span
                className={
                  todo.isCompleted ? "completed--true" : "completed--false"
                }
              >
                {todo.name}
              </span>
              <span onClick={() => this.deleteTodo(todo.id)}> X</span>
              <input
                type="checkbox"
                checked={store.completedTodos}
                onChange={() => this.completeTodo(todo)}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
