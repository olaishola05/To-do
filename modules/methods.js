import Storage from './storage.js';
import Todos from './todosClass.js';

const remove = (todoId) => {
  let todos = Storage.getData();
  todos = todos.filter((todo) => todo.id !== todoId);
  Todos.removeTodo(todos);
};

export { remove };
