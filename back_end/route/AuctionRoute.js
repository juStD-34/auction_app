const Auction = require("../controller/AuctionController");

const router = require("express").Router()

router.post("/", Auction.createAuction)
router.get("/", Auction.getAllAuction)	
router.get("/:id", Auction.getAuctionById)
router.patch("/update/:id", Auction.updateAuctionById)
router.get("/delete/:id", Auction.deleteAuctionById)
module.exports = router
