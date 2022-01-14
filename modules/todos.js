import { displayUI } from './renderTodos.js';

const todos = document.querySelector('.todo-container');

const todoUI = () => {
  todos.innerHTML = displayUI();
};

export default todoUI;
