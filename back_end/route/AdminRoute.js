const Admin = require("../controller/AdminController");
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
adminRouter.get('/allAuction', Admin.getAllAuction);
adminRouter.get('/allBidder', Admin.getAllBidder);
adminRouter.get('/allSeller', Admin.getAllSeller);
adminRouter.post('/addBudget/:id', Admin.addBudget);
module.exports = adminRouter;