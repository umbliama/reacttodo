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

  @computed get getTodos() {
    return this.todos;
  }

  @computed get completedTodos() {
    return this.todos.filter(todo => todo.isCompleted === true);
  }

  addTodo(task) {
    this.todos.push({
      id: this.todos.length + 1,
      name: task,
      isCompleted: false
    });
  }

  deleteTodo(taskId) {
    let index = this.todos.findIndex(todo => todo.id === taskId);
    this.todos.splice(index, 1);
  }

  completeTodo(todo) {
    todo.isCompleted = !todo.isCompleted;
  }
}

const store = new TodoStore();

export default store;
