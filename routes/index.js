const {Router} = require('express');
const router = Router();

router.use(require('./chickens'));
router.use(require('./eggs'));
router.use(require('./home'));

module.exports = router;