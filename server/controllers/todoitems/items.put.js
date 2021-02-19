const TodoItem = require('../../models').TodoItem;

module.exports = {
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
};
