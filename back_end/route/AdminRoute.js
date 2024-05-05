// const Admin = require("../controller/AdminController");
const adminRouter = require("express").Router();
const {getIncomingAuction, getAllSeller, getAllBidder, getAllAuction} = require("../controller/AdminController");

const getIncomingAuctionApi = "/getIncomingAuction"
const getAllSellerApi = "/getAllSeller";
const getAllBidderApi = "/getAllBidder";
const getAllAuctionApi = "/getAllAuction";

adminRouter.get(getIncomingAuctionApi, getIncomingAuction);
adminRouter.get(getAllSellerApi, getAllSeller);
adminRouter.get(getAllBidderApi, getAllBidder);
adminRouter.get(getAllAuctionApi, getAllAuction);


module.exports = adminRouter;