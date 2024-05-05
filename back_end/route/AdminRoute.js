const Admin = require("../controller/AdminController");
const adminRouter = require("express").Router();
adminRouter.get('/allAuction', Admin.getAllAuction);
adminRouter.get('/allBidder', Admin.getAllBidder);
adminRouter.get('/allSeller', Admin.getAllSeller);
adminRouter.post('/addBudget/:id', Admin.addBudget);
module.exports = adminRouter;