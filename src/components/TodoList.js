import React, { Component } from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";

@observer
class TodoList extends Component {
  render() {
    const store = this.props.store;
    return (
      <div>
        <ul>
          {store.todos.map(todo => (
            <li key={todo.id}>
              {todo.id}
              {todo.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
