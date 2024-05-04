const {createAuction, deleteAuction, getAllAuctionByID, getAuctionByID} = require("../controller/SellerController");
const router = require("express").Router();

const createAuctionApi = "/createAuction"
const deleteAuctionApi = "/deleteAuction/:auctionID"
const getAllAuctionByIDApi = "/getAllAuctionByID/:sellerID"
const getAuctionByIDApi = "/getAuctionByID/:auctionID"

router.post(createAuctionApi, createAuction);
router.get(deleteAuctionApi, deleteAuction);
router.get(getAllAuctionByIDApi, getAllAuctionByID);
router.get(getAuctionByIDApi, getAuctionByID);


module.exports = router;