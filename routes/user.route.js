const Router = require('express').Router();
const BaseRouter = require('./base/router.base');
const ModelProvider = require('../services/data.service');
const UserModel = require('../models/user.model');
// const logger = require('../services/logger.service');

// Router.use((req, res, next) => {
//     logger.info('Put here security route');
//     next();
// });

new BaseRouter(Router, new ModelProvider(UserModel));

module.exports = Router;
