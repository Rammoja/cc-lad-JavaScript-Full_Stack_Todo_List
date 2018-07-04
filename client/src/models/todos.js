const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');


const Todos = function (url) {
  this.url = url;
}

Todos.prototype.bindEvents = function () {
  PubSub.subscribe('TodoListView:todo-delete-clicked', (evt) => {
    this.deleteTodo(evt.detail);
  });

  PubSub.subscribe('TodoFromView:todo-submitted', (evt) => {
    this.postTodo(evt.detail);
  });
};

Todos.prototype.getData = function () {
  const request = new Request(this.url);
  request.get()
  .then((todos) => {
    PubSub.publish('Todos:data-loaded', todos);
  })
  .catch(console.error);
};

Todos.prototype.postTodo = function (todo) {
  const require = new Request(this.url);
  request.post(todo)
  .then((todos) => {
    PubSub.publish('Todos:data-loaded', todos);
  })
  .catch(console.error);
};

Todos.prototype.deleteTodo = function (todoId) {
  const require = new Request(this.url);
  request.delete(todoId)
  .then((todos) => {
    PubSub.publish('Todos:data-loaded', todos);
  })
  .catch(console.error);
};



module.exports = Todos;
