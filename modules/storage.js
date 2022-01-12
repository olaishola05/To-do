export default class Storage {
  static storeData(todos) {
    localStorage.setItem('books', JSON.stringify(todos));
  }

  static getData() {
    return JSON.parse(localStorage.getItem('todos'));
  }
}
