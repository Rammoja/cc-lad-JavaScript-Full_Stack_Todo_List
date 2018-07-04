use tasks;
db.dropDatabase();

db.todolist.insertMany([
  {
    task: "Buy alcohol for all my peeps, Richard",
    date: "2018-07-27"
  },
  {
    task: "Buy knew suit for work",
    date: "2018-09-22"
  },
  {
    task: "Buy tickects for Hong Kong",
    date: "2018-10-15"
  }
]);
