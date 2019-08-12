import React, { Component } from "react";
import { observer } from "mobx-react";
import "./TodoList.scss";

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
      <div className="todos">
        <ul className="todos__list">
          {store.todos.map(todo => (
            <li className="todos__item" key={todo.id}>
              <span
                className={
                  todo.isCompleted
                    ? "todos__title todos-completed--true"
                    : "todos__title todos-completed--false"
                }
              >
                {todo.name}
              </span>
              <span
                className="btn btn--delete"
                onClick={() => this.deleteTodo(todo.id)}
              >
                {" "}
                Delete
              </span>
              <span
                className={
                  todo.isCompleted
                    ? "todos__complete todos-completed--true"
                    : "todos__complete todos-completed--false"
                }
                onClick={() => this.completeTodo(todo)}
              >
                complete this one
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
