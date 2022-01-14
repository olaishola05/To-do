import Storage from './storage.js';
import { renderTodos } from './renderTodos.js';

export default class Todos {
  constructor(listContainer) {
    this.listContainer = listContainer;
  }

  setTodos = (description, completed = false) => {
    const todos = Storage.getData();
    const id = todos.length + 1;
    todos.push({
      description,
      completed,
      id,
    });
    Storage.storeData(todos);
    Todos.refreshPage(this.listContainer);
  };

  static refreshPage = (listContainer) => {
    const myDisplay = renderTodos();
    listContainer.innerHTML = myDisplay;
  };

  static removeTodo(todoId, clear = false) {
    let todos = Storage.getData('todos');
    if (!clear) {
      todos = todos.filter((todo) => todo.id !== Number(todoId));
    } else {
      todos = todos.filter((todo) => todo.completed !== true);
    }
    Todos.updateToDoItemId(todos);
  }

  static updateToDoItemId = (todoList) => {
    let i = 0;
    const { length } = todoList;
    for (i; i < length; i += 1) {
      todoList[i].index = i + 1;
    }
    Storage.storeData(todoList);
  };
}
