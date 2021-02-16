const todoItemController = require('../controllers').TodoItems;

module.exports = (app) => {
  app.get('/', (req, res) =>
    res.status(200).send({
      message: 'Welcome to the Todo-APP',
    })
  )

  app.post('/items', todoItemController.create)
};
