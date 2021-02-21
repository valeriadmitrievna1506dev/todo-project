const TodoItem = require("../../models").TodoItem;

module.exports = {
  list: async (req, res) => {
    if (req.query.done === "all") return listAll(req, res);
    return listVariative(req, res);
  },
};

const listAll = async (req, res) => {
  try {
    let reqOrder;
    switch (req.query.order) {
      case "normal": {
        reqOrder = [["updatedAt"]];
        break;
      }
      case "reverse": {
        reqOrder = [["updatedAt", "DESC"]];
        break;
      }
      case undefined: {
        return res.status(400).send({
          message: "Not Found Date Order Param",
        });
        break;
      }
      default:
        break;
    }
    const todoItems = await TodoItem.findAll({
      raw: true,
      order: reqOrder,
    });
    res.status(200).send(todoItems);
  } catch (err) {
    console.log(err.message);
    res.status(400).send(err);
  }
};

const listVariative = async (req, res) => {
  try {
    let reqOrder;
    switch (req.query.order) {
      case "normal": {
        reqOrder = [["updatedAt"]];
        break;
      }
      case "reverse": {
        reqOrder = [["updatedAt", "DESC"]];
        break;
      }
      case undefined: {
        return res.status(400).send({
          message: "Not Found Date Order Param",
        });
        break;
      }
      default:
        break;
    }
    let doneParam;
    switch (req.query.done) {
      case "done": {
        doneParam = { done: true };
        break;
      }
      case "undone": {
        doneParam = { done: false };
        break;
      }
      case undefined: {
        return res.status(400).send({
          message: "Not Found Completeness Parameter",
        });
        break;
      }
      default:
        break;
    }
    const todoItems = await TodoItem.findAll({
      raw: true,
      order: reqOrder,
      where: doneParam,
    });
    res.status(200).send(todoItems);
  } catch (err) {
    console.log(err.message);
    res.status(400).send(err);
  }
};
