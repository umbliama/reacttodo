import { observable } from "mobx";
import { computed } from "mobx";

class TodoStore {
  @observable todos = [
    {
      id: 1,
      name: "buy milk",
      isCompleted: false
    },
    {
      id: 2,
      name: "take a walk with dog",
      isCompleted: true
    }
  ];

  @observable filter = "";
  @computed get getTodos() {
    return this.todos;
  }

  addTodo(task) {
    this.todos.push({
      id: this.todos.length + 1,
      name: task,
      isCompleted: false
    });
    console.log("====================================");
    console.log("pushed");
    console.log("====================================");
  }
}

const store = new TodoStore();

export default store;
