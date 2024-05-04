const {createAuction} = require("../controller/SellerController");
const router = require("express").Router();

router.post("/createAuction", createAuction);

module.exports = router;