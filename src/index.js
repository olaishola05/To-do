import './style.css';
import todoUI from '../modules/todos.js';

function component() {
  const element = document.createElement('div');
  todoUI();

  return element;
}

document.body.appendChild(component());
