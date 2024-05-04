const {createAuction, deleteAuction, getAllAuctionByID} = require("../controller/SellerController");
const router = require("express").Router();

const createAuctionApi = "/createAuction"
const deleteAuctionApi = "/deleteAuction/:auctionID"
const getAllAuctionByIDApi = "/getAllAuctionByID/:sellerID"

router.post(createAuctionApi, createAuction);
router.get(deleteAuctionApi, deleteAuction);
router.get(getAllAuctionByIDApi, getAllAuctionByID);


module.exports = router;