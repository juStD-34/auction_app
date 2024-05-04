const Bidder = require("../controller/BidderController");
// const User = require("../controller/UserController");
const {userVerification} = require("../Middleware/Middleware");

const router = require("express").Router();
router.patch('/:id', userVerification, Bidder.createBid)
// router.get('/user/:id', User.findUserById)


module.exports = router