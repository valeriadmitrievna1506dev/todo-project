const TodoItem = require('../models').TodoItem;

module.exports = {
  create(req, res) {
    return TodoItem.create({
      text: req.body.text,
      done: false,
    })
      .then((todoItem) => res.status(201).send(todoItem))
      .catch((error) => res.status(400).send(error));
  },
  list(req, res) {
    return TodoItem.findAll({raw:true})
    .then(items => res.status(200).send(items))
    .catch(err => res.status(400).send(err))
  }
};
