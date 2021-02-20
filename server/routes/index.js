const todoItemController = require('../controllers').TodoItems;

module.exports = (app) => {
  app.get('/', (req, res) =>
    res.status(200).send({
      message: 'Welcome to the Todo-APP',
    })
  );

  app.post('/items', todoItemController.createItem.create);
  app.get('/items', todoItemController.getItems.listAll);
  app.get('/items/all', todoItemController.getItems.listAll);
  app.get('/items/done', todoItemController.filterItems.listDone)
  app.get('/items/undone', todoItemController.filterItems.listUndone)
  app.get('/items/date-up', todoItemController.filterItems.listDateUp)
  app.get('/items/date-down', todoItemController.filterItems.listDateDown)
  app.get('/items/:id', todoItemController.getItemByID.retrieve);
  app.put('/items/:id', todoItemController.updateItem.update);
  app.delete('/items/:id', todoItemController.deleteItem.destroy);
};
