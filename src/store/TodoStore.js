import { observable } from "mobx";
import { computed } from "mobx";

class TodoList {
  @observable todos = [];

  @computed get todos() {
    return this.todos;
  }
}

export default TodoList;
