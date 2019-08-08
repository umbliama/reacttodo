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

  render() {
    return (
      <div>
        <input type="text" onChange={this.setTask} />
        <button disabled={!this.state.textTodo} onClick={this.addTodo}>
          Add
        </button>
      </div>
    );
  }
}

export default AddTodo;
