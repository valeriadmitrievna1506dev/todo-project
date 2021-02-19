const TodoItem = require('../models').TodoItem;

module.exports = {
  create: async (req, res) => {
    try {
      if (!req.body) throw new Error(400);
      if (!req.body.text) throw new Error(400);
      const todoItem = await TodoItem.create({
        text: req.body.text,
        done: false,
      });
      res.status(201).send(todoItem);
    } catch (err) {
      res.status(400).send(err);
    }
  },
  list: async (req, res) => {
    try {
      const todoItems = await TodoItem.findAll({ raw: true });
      res.status(200).send(todoItems);
    } catch (err) {
      res.status(400).send(err);
    }
  },
  retrieve: async (req, res) => {
    try {
      const todoItem = await TodoItem.findByPk(req.params.id);
      if (!todoItem) {
        return res.status(404).send({
          message: 'Item Not Found',
        });
      }
      res.status(200).send(todoItem);
    } catch (err) {
      res.status(400).send(err);
    }
  },

  update: async (req, res) => {
    try {
      const todoItem = await TodoItem.findByPk(req.params.id);
      if (!todoItem) {
        return res.status(404).send({
          message: 'Item Not Found',
        });
      }
      if (!req.body.text && req.body.done === undefined) {
        return res.status(404).send({
          message: 'Invalid Request Body',
        });
      }
      todoItem.update({
        text: req.body.text || todoItem.text,
        done: req.body.done === undefined ? todoItem.done : req.body.done,
      });
      res.status(200).send(todoItem);
    } catch (err) {
      res.status(400).send(err.message);
    }
  },

  destroy: async (req, res) => {
    try {
      const todoItem = await TodoItem.findByPk(req.params.id);

      if (!todoItem) {
        return res.status(404).send({
          message: 'Item Not Found',
        });
      }

      todoItem.destroy();
      res.status(204).send();
    } catch (err) {
      res.status(400).send(err.message);
    }
  },
};
