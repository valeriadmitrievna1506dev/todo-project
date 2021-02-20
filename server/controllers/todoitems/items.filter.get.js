const TodoItem = require('../../models').TodoItem;

module.exports = {
  listDone: async (req, res) => {
    try {
      const todoItems = await TodoItem.findAll({ 
        raw: true,
        where: {
          done: true,
        }
       });
      res.status(200).send(todoItems);
    } catch (err) {
      console.log(err.message);
      res.status(400).send(err);
    }
  },
  listUndone: async (req, res) => {
    try {
      const todoItems = await TodoItem.findAll({ 
        raw: true,
        where: {
          done: false,
        }
       });
      res.status(200).send(todoItems);
    } catch (err) {
      console.log(err.message);
      res.status(400).send(err);
    }
  },
  listDateUp: async (req, res) => {
    try {
      const todoItems = await TodoItem.findAll({ 
        raw: true,
        order: [
          ['updatedAt']
        ],
       });
      res.status(200).send(todoItems);
    } catch (err) {
      console.log(err.message);
      res.status(400).send(err);
    }
  },
  listDateDown: async (req, res) => {
    try {
      const todoItems = await TodoItem.findAll({ 
        raw: true,
        order: [
          ['updatedAt', 'DESC']
        ],
       });
      res.status(200).send(todoItems);
    } catch (err) {
      console.log(err.message);
      res.status(400).send(err);
    }
  },
};
