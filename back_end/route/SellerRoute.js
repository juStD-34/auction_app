const Seller = require("../controller/SellerController");
const router = require("express").Router();

router.post("/createAuction", Seller.createAuction);