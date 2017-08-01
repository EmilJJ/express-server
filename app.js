const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const errorService = require('./services/error.service');
const routes = require('./constants/routes');
const index = require('./routes/index.route');
const user = require('./routes/user.route');
const hero = require('./routes/super.hero.route');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes.defaultRouter, index);
app.use(routes.userRouter, user);
app.use(routes.hero, hero);
app.use(errorService.notFound);
app.use(errorService.internal);

module.exports = app;


// Создать по своей модели со всеми круд операциями 

// Pasport JS, Google web token, Doker container 

