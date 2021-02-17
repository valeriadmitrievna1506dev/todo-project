const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path')

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.resolve('client/')));

require('./server/routes')(app);
app.get('*', (req, res) =>
  res.status(200).send({
    message: 'Welcome to the Todo Application',
  })
);

module.exports = app;
