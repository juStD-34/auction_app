const {createAuction, deleteAuction} = require("../controller/SellerController");
const router = require("express").Router();

const createAuctionApi = "/createAuction"
const deleteAuctionApi = "/deleteAuction/:auctionID"
const getAllAuctionByIDApi = "/getAllAuctionByID/:sellerID"
const getAuctionByIDApi = "/getAuctionByID/:auctionID"
const stopAuctionApi = "/stopAuction/:auctionID"

router.post(createAuctionApi, createAuction);
router.get(deleteAuctionApi, deleteAuction);
router.get(getAllAuctionByIDApi, getAllAuctionByID);
router.get(getAuctionByIDApi, getAuctionByID);
router.get(stopAuctionApi, stopAuction);


module.exports = router;