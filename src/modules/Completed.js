import { renderTodos } from './renderTodos.js';
import Storage from './storage.js';
import Todos from './todosClass.js';

const reRender = (listContainer) => {
  const myDisplay = renderTodos();
  listContainer.innerHTML = myDisplay;
};

const markCompleted = (checkbox, id, listContainer) => {
  const { checked } = checkbox;
  const toDoList = Storage.getData();
  toDoList[id - 1].completed = checked;
  Storage.storeData(toDoList);
  reRender(listContainer);
};

const clearCompleted = (listContainer) => {
  Todos.removeTodo(0, true);
  reRender(listContainer);
};

export { markCompleted, clearCompleted };
