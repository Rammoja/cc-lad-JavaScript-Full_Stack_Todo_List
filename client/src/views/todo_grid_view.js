const PubSub = require('../helpers/pub_sub.js');
const TodoListView = require('./todo_list_view.js');

const TodoGridView = function (container) {
  this.container = container;
};

TodoGridView.prototype.bindEvents = function () {
  PubSub.subscribe('Todos:data-loaded', (evt) => {
    this.render(evt.detail);
  });
};

TodoGridView.prototype.render = function (todos) {
  this.container.innerHTML = '';
  const todoListView = new TodoListView(this.container);
  todos.forEach((todo) => todoListView.render(todo));
};

module.exports = TodoGridView;
