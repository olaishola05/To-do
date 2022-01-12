import Storage from './storage';

export default class Todos {
  constructor(id = null, description = null, complete = false) {
    this.id = id;
    this.description = description;
    this.complete = complete;
  }

  setBooks(todo, id) {
    this.todos = Storage.getData('todos');
    todo = new Todos(todo, complete, id);
    this.todos.unshift(todo);
    Storage.storeData(this.todos);
  }

  static removeBook(bookId) {
    this.todos = Storage.getData('todos');
    this.todos = this.todos.filter((todo) => todo.id !== bookId);
    Storage.storeData(this.todos);
    renderBooks();
  }
}
