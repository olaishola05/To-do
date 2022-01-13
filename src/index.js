import _ from 'lodash';
import Storage from '../modules/storage.js';
import './style.css';
import todoUI from '../modules/todos.js';
import Todos from '../modules/todosClass.js';

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
const elipse = document.querySelectorAll('.dots');
const trash = document.querySelectorAll('.trash');
const span = document.querySelectorAll('span');
const listsContainer = document.querySelector('.todos');

// for (let i = 0; elipse.length; i += 1) {
//   elipse[i].addEventListener('click', (e) => {
//     e.target.display = 'none';
//     elipse[i].style.display = 'none';
//     trash[i].style.display = 'block';
//     // span[i].contenteditable = true;
//     if (e.target.contenteditable === false) {
//       e.target.contenteditable = true;
//     }
//   });
// }

listsContainer.addEventListener('click', (e) => {
  const storedData = Storage.getData();
  // console.log(storedData);
  if (e.target.tagName === 'SPAN') {
    e.target.setAttribute('contenteditable', true);
    const UpdateDescription = e.target.textContent;
    // Todos.setTodos(UpdateDescription);
  }
});

const formBtn = document.querySelector('.form-btn');
formBtn.addEventListener('click', addTodo);

document.body.appendChild(component());
