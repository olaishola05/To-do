import _ from 'lodash';
import './style.css';
import todoUI from '../modules/todos.js';
import Todos from '../modules/todosClass.js';
import Methods from '../modules/methods.js';
import { markCompleted, clearCompleted } from '../modules/Completed.js';

todoUI();
const listsContainer = document.querySelector('.todos');
const input = document.querySelector('#add-todo');
const formBtn = document.querySelector('.form-btn');
const todoContainer = document.querySelector('.todos');
const clearCompletedElement = document.querySelector('#clear');

const methods = new Methods([], false, todoContainer);
const addList = new Todos(todoContainer);

function component() {
  const element = document.createElement('div');
  element.innerHTML = _;
  return element;
}

const addTodo = () => {
  if (input.value !== '') {
    addList.setTodos(input.value);
    input.value = '';
    window.location.reload();
  }
};

listsContainer.addEventListener('click', (e) => {
  const getItemTagName = e.target.tagName;
  if (getItemTagName === 'LI') {
    const li = e.target;
    const { id } = e.target;
    methods.markListForChange(li, id);
  } else if (e.target.tagName === 'INPUT') {
    const checkbox = e.target;
    const { id } = e.target;
    markCompleted(checkbox, id, listsContainer);
  }
});

clearCompletedElement.addEventListener('click', () => {
  clearCompleted(listsContainer);
});

formBtn.addEventListener('click', addTodo);

document.body.appendChild(component());
