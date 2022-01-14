import Storage from './storage.js';

const renderTodos = (todos) => {
  todos = Storage.getData('todos');
  let render = '';
  if (todos.length < 0) {
    return render;
  }

  todos.forEach((todo) => {
    if (!todo.completed) {
      render += `<li id="${todo.id}">
                  <div><input type="checkbox" name="check" id="${todo.id}" /> <span>${todo.description}</span></div>
                    <span><i class="fas fa-ellipsis-v dots cursorC"></i>
                    <i class="far fa-trash-alt trash cursorC"></i></span>
                  </li>`;
    } else {
      render += `<li id="${todo.id}">
        <div><input type="checkbox" name="check" id="${todo.id}" checked/> 
        <span class="completed">${todo.description}</span></div>
          <span><i class="fas fa-ellipsis-v dots cursorC"></i>
          <i class="far fa-trash-alt trash cursorC"></i></span>
        </li>`;
    }
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
                <div class="clear cursorC">
                  <p id="clear">Clear all completed</p>
                </div>
              </div>
            </div>`;
  return view;
};

export { displayUI, renderTodos };
