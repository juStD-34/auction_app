// const Admin = require("../controller/AdminController");
const adminRouter = require("express").Router();
const {getIncomingAuction, payForAuction, getAllSeller, getAllBidder, getAllAuction, getOccuringAuction} = require("../controller/AdminController");

const getIncomingAuctionApi = "/getIncomingAuction"
const getAllSellerApi = "/getAllSeller";
const getAllBidderApi = "/getAllBidder";
const getAllAuctionApi = "/getAllAuction";
const getOccuringAuctionApi = "/getOccuringAuction"

adminRouter.get(getIncomingAuctionApi, getIncomingAuction);
adminRouter.get(getAllSellerApi, getAllSeller);
adminRouter.get(getAllBidderApi, getAllBidder);
adminRouter.get(getAllAuctionApi, getAllAuction);
adminRouter.get(getOccuringAuctionApi, getOccuringAuction);
adminRouter.get('/payForAuction/:auctionID', payForAuction);


module.exports = adminRouter;