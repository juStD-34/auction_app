const Bidder = require("../controller/BidderController");
// const User = require("../controller/UserController");


const router = require("express").Router();
router.post('/createBid', Bidder.createBid)
// routet('/user/:id', User.findUserById)
router.post('/deleteBid', Bidder.deleteBid)

module.exports = router
