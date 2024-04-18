const Auction = require("../controller/AuctionController");

const route = require("express").Router()

route.post("/createAuction", Auction.createAuction)	