const Bidder = require("../controller/BidderController");

const router = require("express").Router();

router.get('/search', Bidder.search);
router.get('/getIncompleteAuction', Bidder.getIncompleteAuction);

module.exports = router;