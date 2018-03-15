const {Router} = require('express');
const homeRouter = Router();


homeRouter.get('./home');

module.exports = homeRouter;