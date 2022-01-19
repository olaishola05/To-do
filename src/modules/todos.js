import { displayUI } from './renderTodos.js';

const todoUI = () => {
  const todos = document.querySelector('.todo-container');
  todos.innerHTML = displayUI();
};

export default todoUI;
