const auction = require("../Model/AuctionModel");
const participants = require("../Model/ParticipantsModel");
module.exports.createBid = async (req, res) => {
  const { userId, price } = req.body;
  try {
    const result = await participants.findOne({ auctionID: req.params.id });
    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Auction not found",
      });
    }
    const newBid = await participants.findOneAndUpdate(
      { auctionID: req.params.id },
      {
        $push: { participants: { bidderId: userId, price: price } },
      },
    );
    res.status(201).json({
      success: true,
      message: "Create bid successfully",
      newBid,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

const Auction = require("../Model/AuctionModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports.getIncompleteAuction = async (req, res) => {
  try {
    if (!req.cookies.token) {
      return res.json({ status: false, message: "Please login first" });
    }
    const token = req.cookies.token;
    jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
      if (err) {
        return res.json({ status: false });
      } else {
        try {
          const user_id = data.id;
          const query = { participants: { $elemMatch: { bidderId: user_id } } };
          const searchResult = await Auction.find(query);
          res.status(201).json({
            success: true,
            message: "Search successful",
            searchResult,
          });
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.search = async (req, res) => {
  const { auctionName, startDate, endDate, startPrice, type } = req.body;
  const query = {};
  if (auctionName) {
    query.auctionName = { $regex: auctionName, $options: "i" };
  }
  if (startDate) {
    query.timeStart = { $gte: new Date(startDate) };
  }
  if (endDate) {
    query.timeEnd = { $lte: new Date(endDate) };
  }
  if (startPrice) {
    query.startPrice = { $gte: startPrice };
  }
  if (type) {
    query.productType = { $regex: type, $options: "i" };
  }

  try {
    const searchResult = await Auction.find(query);
    res.status(201).json({
      success: true,
      message: "Search successful",
      searchResult,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.DeleteBid = async (req, res) => {
    const { userId } = req.body;
    try {
      const result = await participants.findOne({ auctionID: req.params.id });
      if (!result) {
        return res.status(404).json({
          success: false,
          message: "Auction not found",
        });
      }
      const newBid = await participants.findOne({ auctionID: req.params.id })
      const element = await newBid.findLast({ bidderId: userId })
      element.softDelete = true
      await newBid.save()      

      res.status(201).json({
        success: true,
        message: "Create bid successfully",
        newBid,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error.message,
      });
    }
  };

module.exports.getFailAuction = async (req, res) => {
  res.json({ msg: "get fail auction" });
};

//
module.exports.getSuccessAuction = async (req, res) => {
  res.json({ msg: "get success auction" });
};

//Con thieu tinh nang se them sau
