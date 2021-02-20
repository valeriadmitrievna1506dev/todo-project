const TodoItem = require('../../models').TodoItem;

module.exports = {
  listAll: async (req, res) => {
    try {
      const todoItems = await TodoItem.findAll({ 
        raw: true,
        order: [
          ['id']
        ]
       });
      res.status(200).send(todoItems);
    } catch (err) {
      console.log(err.message);
      res.status(400).send(err);
    }
  },
};
