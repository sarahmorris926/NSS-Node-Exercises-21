const {Router} = require('express');
const eggRouter = Router();


eggRouter.get('./eggs');

module.exports = eggRouter;