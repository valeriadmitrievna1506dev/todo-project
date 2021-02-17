const express = require('express')
const path = require('path');
const todoItemController = require('../controllers').TodoItems;

module.exports = (app) => {
  app.use(express.static(path.resolve('client/')));
  app.use(function (req, res) {
    res.sendFile(path.resolve('client/index.html'));
  });

  app.get('/', (req, res) =>
    res.status(200).send({
      message: 'Welcome to the Todo-APP',
    })
  );

  app.post('/items', todoItemController.create);
  app.get('/items', todoItemController.list);
  app.get('/items/:id', todoItemController.retrieve);
  app.put('/items/:id', todoItemController.update);
  app.delete('/items/:id', todoItemController.destroy);
};
