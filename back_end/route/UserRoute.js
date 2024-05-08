const User = require("../controller/UserController");
const router = require("express").Router();
router.get('/:id', User.findUserById);
router.post('/:id', User.updateUserById);
router.post('/password/:id', User.changePassword);
router.get('/highestPrice/:id', User.getHighestPrice);
module.exports = router