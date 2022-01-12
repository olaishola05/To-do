// import _ from 'lodash';
import './style.css';
import tasks from '../modules/data.js';
import { todoUI } from '../modules/todos.js';

function component() {
  const element = document.createElement('div');
  todoUI();

  console.log(tasks);

  return element;
}

document.body.appendChild(component());
