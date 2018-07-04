const TodoFromView = require('./views/todo_form_view.js');
const TodoGridView = require('./views/todo_grid_view.js');
const Todos = require('./models/todos.js');

document.addEventListener('DOMContentLoaded', () => {
  const todoForm = document.querySelector('#todo-form');
  const todoFormView = new TodoFromView(todoForm);
  todoFormView.bindEvents();

  const todoContainer = document.querySelector('#todo');
  const todoGridView = new TodoGridView(todoContainer);
  todoGridView.bindEvents();


  const todoUrl = 'http://localhost:3000/api/todo-list';
  const todos = new Todos(todoUrl);
  todos.bindEvents();
  todos.getData();
});
