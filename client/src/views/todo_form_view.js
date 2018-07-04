const PubSub = require('../helpers/pub_sub.js');


const TodoFromView = function (form) {
  this.form = form;
}

TodoFromView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  const newTask = this.createTask(evt.target);
  PubSub.publish('TodoFromView:todo-submitted', newTask);
  evt.target.reset();
}

TodoFromView.prototype.createTask = function (form) {
  const newTask = {
    task: form.task.value,
    date: form.date.value
  }
  return newTask
};

module.exports = TodoFromView;
