const Bidder = require("../controller/BidderController");


const router = require("express").Router();
router.post('/createBid', Bidder.createBid)
// routet('/user/:id', User.findUserById)
router.post('/deleteBid', Bidder.deleteBid)
router.get('/searchAuction', Bidder.search)
module.exports = router
