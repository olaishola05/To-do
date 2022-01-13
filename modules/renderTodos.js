import Storage from './storage.js';

// Storage.storeData(tasks);

const todos = document.querySelector('.todo-container');
const renderTodos = (todos) => {
  todos = Storage.getData('todos');
  let render = '';
  if (todos.length < 0) {
    return render;
  }

  todos.forEach((todo) => {
    render += `<li>
                    <div><input type="checkbox" name="check" id="${todo.id}" /> <span contenteditable="false">${todo.description}</span></div>
                    <i class="fas fa-ellipsis-v"></i>
                  </li>`;
  });

  return render;
};

const displayUI = () => {
  const view = `<div class="todo">
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
                ${renderTodos()}
                </ul>
                <div class="clear">
                  <p id="clear">Clear all completed</p>
                </div>
              </div>
            </div>`;

  // todos.innerHTML = view;
  return view;
};

const refreshUI = () => {
  const getData = Storage.getData();
  if (getData.length > 0) {
    console.log('it touch me');
  }
};

export { displayUI, refreshUI, renderTodos };
