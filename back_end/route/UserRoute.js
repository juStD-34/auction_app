const User = require("../controller/UserController");
const router = require("express").Router();
router.get('/:id', User.findUserById);
router.patch('/:id', User.updateUserById);
router.patch('/password/:id', User.changePassword);
module.exports = router