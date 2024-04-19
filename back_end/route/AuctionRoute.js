const Auction = require("../controller/AuctionController");

const router = require("express").Router()

router.post("/createAuction", Auction.createAuction)	

module.exports = router