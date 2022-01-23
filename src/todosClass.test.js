/**
 * @jest-environment jsdom
 */
import Todos from './modules/todosClass.js';
import Storage from './modules/storage.js';

document.body.innerHTML = `<div class="todo">
              <div class="caption">
                <p>Today's To Do</p>
                <i class="fas fa-sync"></i>
              </div>
              <div class="input-todo">
                <input type="text" name="add-todo" id="add-todo" placeholder="Add to your list..." required/>
                <button type='submit' class='form-btn' tabindex='0'><i class="fas fa-level-down-alt rotate add"></i></button>
              </div>
              <div class="conditional">
                <ul class="todos">
                </ul>
                <div class="clear cursorC">
                  <p id="clear">Clear all completed</p>
                </div>
              </div>
            </div>`;
const list = document.querySelector('.todos');
const newTodos = new Todos(list);

describe('Add todo', () => {
  test('should add new item to todos list', () => {
    const task = {
      description: 'Update Linkedin Status',
      completed: false,
      id: 1,
    };
    newTodos.setTodos(task);
    const todos = JSON.parse(localStorage.getItem('todos'));
    expect(todos.length).toBe(1);
  });

  test('Add two tasks todo item', () => {
    const tasks = [
      {
        description: 'Update Linkedin Status',
        completed: false,
        id: 1,
      },
      {
        description: 'Update Linkedin Status',
        completed: false,
        id: 2,
      },
    ];

    newTodos.setTodos(tasks);
    const todos = JSON.parse(localStorage.getItem('todos'));
    expect(todos.length).toBe(2);
  });
});

describe('Delete Item', () => {
  test('Remove a todo from the list', () => {
    // const tasks = [
    //   {
    //     description: 'Update Linkedin Status',
    //     completed: false,
    //     id: 1,
    //   },
    //   {
    //     description: 'Update Linkedin Status',
    //     completed: false,
    //     id: 2,
    //   },
    //   {
    //     description: 'Update Linkedin Status',
    //     completed: false,
    //     id: 3,
    //   },
    // ];
    const todos = JSON.parse(localStorage.getItem('todos'));

    const idToRemove = todos[1].id;
    Todos.removeTodo(idToRemove, true);
    newTodos.setTodos(todos);
    expect(todos.length).toBe(2);
  });
});
