import React, { Component } from "react";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textTodo: null
    };
  }
  setTask = event => {
    const { value } = event.target;

    this.setState({
      textTodo: value
    });
  };
  addTodo = () => {
    this.props.store.addTodo(this.state.textTodo);
  };
  buttonDisabled = () => {
    const { textTodo } = this.state;
    if (textTodo === "") {
      console.log("false");

      return false;
    } else {
      console.log("true");

      return true;
    }
  };
  render() {
    return (
      <div>
        <input type="text" onChange={this.setTask} />
        <button disabled={Boolean(this.buttonDisabled)} onClick={this.addTodo}>
          Add
        </button>
      </div>
    );
  }
}

export default AddTodo;
