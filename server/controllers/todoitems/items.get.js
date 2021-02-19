const TodoItem = require('../../models').TodoItem;

module.exports = {
  list: async (req, res) => {
    console.log('start');
    try {
      console.log('start try');
      const todoItems = await TodoItem.findAll({ raw: true });
      res.status(200).send(todoItems);
    } catch (err) {
      console.log(err.message);
      res.status(400).send(err);
    }
  },
};
