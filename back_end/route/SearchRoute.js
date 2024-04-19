const search = require("../controller/SearchController");

const router = require("express").Router();

router.post("/search", search.search);
module.exports = router;