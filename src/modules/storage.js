export default class Storage {
  static storeData(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  static getData() {
    return localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];
  }
}
