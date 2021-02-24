const TodoItem = require('../../models').TodoItem;

const filtersToPostgres = {
  'normal': [['createdAt']],
  'reverse': [['createdAt', 'DESC']],
  'done': {done: true},
  'undone': {done: false}
}

module.exports = {
  list: async (req, res) => {
    const filters = {
      order: filtersToPostgres[req.query.order],
      done: filtersToPostgres[req.query.done]
    }
    console.log(filters);
    try {
      const result = await TodoItem.findAll({
        order: filters.order,
        where: filters.done
      })
      res.status(200).send(result)
    } catch (error) {
      res.status(400).send(error.message)
    }
  },
};

