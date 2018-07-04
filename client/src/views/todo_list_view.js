const PubSub = require('../helpers/pub_sub.js');

const TodoListView = function (container) {
  this.container = container;
}

TodoListView.prototype.render = function (todo) {
  const todoContainer = document.createElement('div');
  todoContainer.id = 'todo';

  const task = this.createHeading(todo.task);
  todoContainer.appendChild(task);

  const date = this.createDetail('Date', todo.date);
  todoContainer.appendChild(date);

  const deleteButton = this.createDeleteButton(todo._id);
  todoContainer.appendChild(deleteButton);

  this.container.appendChild(todoContainer);
};


TodoListView.prototype.createHeading = function (textContent) {
  const heading = document.createElement('h3');
  heading.textContent= textContent;
  return heading;

};
TodoListView.prototype.createDetail = function (label, text) {
  const detail = document.createElement('p');
  detail.textContent = `${label}: ${text}`;
  return detail;
};

TodoListView.prototype.createDeleteButton = function (todoId) {
  const button = document.createElement('button');
  button.classList.add('delete-btn');
  button.value = todoId;

  button.addEventListener('click', (evt) => {
    PubSub.publish('TodoListView:todo-delete-clicked', evt.target.value);
  });

  return button;
};

module.exports = TodoListView;
