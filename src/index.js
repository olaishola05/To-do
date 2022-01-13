import _ from 'lodash';
import './style.css';
import todoUI from '../modules/todos.js';
import Todos from '../modules/todosClass.js';
import { displayUI, refreshUI } from '../modules/renderTodos.js';

if (JSON.parse(localStorage.getItem('todos')) === null) {
  localStorage.setItem('todos', JSON.stringify([]));
}

function component() {
  const element = document.createElement('div');
  element.innerHTML = _;

  return element;
}

todoUI();
// window.onload = displayUI();

const input = document.querySelector('#add-todo');

const addTodo = () => {
  if (input.value !== '') {
    Todos.setTodos(input.value);
    window.location.reload();
    input.value = '';
  }
};

const formBtn = document.querySelector('.form-btn');
formBtn.addEventListener('click', addTodo);

// const liSpan = document.querySelectorAll('li > div > span');
// for (let i = 0; i < liSpan.length; i = +1) {
//   liSpan[i].addEventListener('click', () => {
//     liSpan[i].contenteditable = 'true';
//   });
// }

// const checks = document.querySelectorAll("input[type='checkbox']");

// checks.forEach((check) => {
//   const span = document.querySelectorAll('span');
//   if (check.checked === true) {
//     const baby = check.lastChild.textContent.value;
//     console.log(baby);
//   }
// });

document.body.appendChild(component());
