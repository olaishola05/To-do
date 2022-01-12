import renderTodos from './renderTodos.js';

const todos = document.querySelector('.todo-container');

const todoUI = () => {
  todos.innerHTML = renderTodos();
};

export default todoUI;
