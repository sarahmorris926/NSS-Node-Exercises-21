const {Router} = require('express');
const chickenRouter = Router();


chickenRouter.get('./chickens');

module.exports = chickenRouter;