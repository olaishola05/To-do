import Storage from './storage.js';
import todoUI from './todos.js';
import { displayUI, refreshUI, renderTodos } from './renderTodos.js';

export default class Todos {
  constructor(description, id, completed) {
    this.description = description;
    this.id = id;
    this.completed = completed;
  }

  static setTodos = (description, completed = false) => {
    const todos = Storage.getData();
    const id = todos.length + 1;
    todos.push({
      description,
      completed,
      id,
    });
    Storage.storeData(todos);
  };

  static removeTodo(todoId) {
    this.todos = Storage.getData('todos');
    this.todos = this.todos.filter((todo) => todo.id !== todoId);
    Storage.storeData(this.todos);
  }
}
