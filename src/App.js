import React, { Component } from "react";
import TodoList from "./components/TodoList";
import { observer } from "mobx-react";
import AddTodo from "./components/AddTodo";
@observer
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const store = this.props.store;
    return (
      <div>
        <AddTodo store={store} />
        <TodoList store={store} />
      </div>
    );
  }
}

export default App;
