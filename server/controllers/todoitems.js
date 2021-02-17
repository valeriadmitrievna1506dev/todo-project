const TodoItem = require('../models').TodoItem;

module.exports = {
  create(req, res) {
    if (!req.body) res.status(400).send(error)
    return TodoItem.create({
      text: req.body.text,
      done: false,
    })
      .then((todoItem) => {
        res.status(201).send(todoItem)})
      .catch((error) => res.status(400).send(error));
  },
  list(req, res) {
    return TodoItem.findAll({ raw: true })
      .then((items) => res.status(200).send(items))
      .catch((err) => res.status(400).send(err));
  },
  retrieve(req, res) {
    return TodoItem.findByPk(req.params.id)
      .then((item) => {
        if (!item) {
          return res.status(404).send({
            message: 'Item Not Found',
          });
        }
        return res.status(200).send(item);
      })
      .catch((error) => res.status(400).send(error));
  },
  update(req, res) {
    return TodoItem.findByPk(req.params.id)
      .then((todoItem) => {
        if (!todoItem) {
          return res.status(404).send({
            message: 'Item Not Found',
          });
        }

        return todoItem
          .update({
            text: req.body.text || todoItem.text,
            done: req.body.done || todoItem.done,
          })
          .then((updatedTodoItem) => {
            res.status(200).send(updatedTodoItem);
          })
          .catch((err) => res.status(400).send(err));
      })
      .catch((err) => res.status(400).send(err));
  },
  destroy(req, res) {
    return TodoItem.findByPk(req.params.id)
      .then((item) => {
        if (!item) {
          return res.status(404).send({
            message: 'Item Not Found',
          });
        }

        return item
          .destroy()
          .then(() => res.status(204).send())
          .catch((err) => res.status(400).send(err));
      })
      .catch((err) => res.status(400).send(err));
  },
};
