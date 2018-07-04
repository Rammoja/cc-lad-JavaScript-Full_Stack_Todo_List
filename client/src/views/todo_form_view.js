const PubSub = require('../helpers/pub_sub.js');


const TodoFromView = function (form) {
  this.form = form;
}

TodoFromView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (evt) => {
    this.handleSubmit(evt);
  })
};

TodoFromView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
};

module.exports = TodoFromView;
