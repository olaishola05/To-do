import tasks from './data.js';

const renderTodos = () => {
  let render = '';
  if (tasks.length < 0) {
    render = '';
  }

  tasks.forEach((todo) => {
    render += `  <li>
                    <div><input type="checkbox" name="check" id="${todo.id}" /> <span>${todo.description}</span></div>
                    <i class="fas fa-ellipsis-v"></i>
                  </li>`;
  });

  return render;
};

const todoUI = () => {
  const view = `<div class="todo">
              <div class="caption">
                <p>Today's To Do</p>
                <i class="fas fa-sync"></i>
              </div>
              <div class="input-todo">
                <input type="text" name="add-todo" id="add-todo" placeholder="Add to your list..." />
                <i class="fas fa-level-down-alt rotate"></i>
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

  return view;
};

export default todoUI;
