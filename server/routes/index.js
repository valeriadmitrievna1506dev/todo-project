const todoItemController = require('../controllers').TodoItems;

module.exports = (app) => {
  app.get('/', (req, res) =>
    res.status(200).send({
      message: 'Welcome to the Todo-APP',
    })
  )

  const getItems = require('./../controllers/todoitems/items.get')
  const addItem = require('./../controllers/todoitems/items.post')

  app.use('/items',
                    getItems,
                    addItem);
  // app.get('/items/:id', todoItemController.getItemByID.retrieve);
  // app.put('/items/:id', todoItemController.updateItem.update);
  // app.delete('/items/:id', todoItemController.deleteItem.destroy);
};
