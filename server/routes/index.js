module.exports = (app) => {
  app.get('/', (req, res) =>
    res.status(200).send({
      message: 'Welcome to the Todo-APP',
    })
  )

  const getItems = require('./../controllers/todoitems/items.get')
  const addItem = require('../controllers/todoitems/item.post')
  const editItem = require('../controllers/todoitems/item.put')
  const getItem = require('../controllers/todoitems/item.get')
  const deleteItem = require('../controllers/todoitems/item.delete')

  app.use('/items',
    getItems,
    addItem,
    editItem,
    getItem,
    deleteItem);
};
