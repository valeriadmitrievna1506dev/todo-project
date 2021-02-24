const TodoItem = require('../../models').TodoItem;
const express = require('express');
const router = express.Router();

router.post('', async (req, res) => {
  try {
    if (!req.body) throw new Error(400);
    if (!req.body.text) throw new Error(400);
    const todoItem = await TodoItem.create({
      text: req.body.text,
      done: false,
    });
    res.status(201).send(todoItem);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
