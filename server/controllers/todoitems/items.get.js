const TodoItem = require('../../models').TodoItem;
const express = require('express');
const router = express.Router();

router.get('', async (req, res) => {
  try {
    const filter = {
      order:
        req.query.order === 'reverse'
          ? [['createdAt', 'DESC']]
          : [['createdAt']],
    };

    if (req.query.done)
      filter.where =
        req.query.done === 'done' ? { done: true } : { done: false };

    const result = await TodoItem.findAll(filter);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router