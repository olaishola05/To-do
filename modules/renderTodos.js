import tasks from './data.js';

const renderTodos = () => {
  let render = '';
  if (tasks.length < 0) {
    return render;
  }

  tasks.forEach((todo) => {
    render += `<li>
                    <div><input type="checkbox" name="check" id="${todo.id}" /> <span>${todo.description}</span></div>
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
              <form class="input-todo">
                <input type="text" name="add-todo" id="add-todo" placeholder="Add to your list..." />
                <button type='submit' class='form-btn' tabindex='0'><i class="fas fa-level-down-alt rotate add"></i></button>
              </form>
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

export default displayUI;
