const {createAuction, deleteAuction} = require("../controller/SellerController");
const router = require("express").Router();

const createAuctionApi = "/createAuction"
const deleteAuctionApi = "/deleteAuction/:auctionID"

router.post(createAuctionApi, createAuction);
router.get(deleteAuctionApi, deleteAuction);


module.exports = router;