const TodoItem = require('../../models').TodoItem;

module.exports = {
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
};
