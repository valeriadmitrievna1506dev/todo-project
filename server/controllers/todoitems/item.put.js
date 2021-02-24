const TodoItem = require('../../models').TodoItem;
const express = require('express');
const router = express.Router();

router.put('/:id', async (req, res) => {
  try {
    const task = req.body;

    if (!task.text && task.done === undefined) {
      return res.status(400).send({
        message: 'Invalid Request Body',
      });
    }

    const todoItem = await TodoItem.findByPk(req.params.id);

    if (!todoItem) {
      return res.status(404).send({
        message: 'Item Not Found',
      });
    }

    await todoItem.update(task);

    res.status(200).send(todoItem);
  } catch (err) {
    console.log(err.message);
    res.status(400).send(err.message);
  }
});

module.exports = router;
