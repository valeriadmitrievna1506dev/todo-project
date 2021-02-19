const TodoItem = require('../../models').TodoItem;

module.exports = {
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
