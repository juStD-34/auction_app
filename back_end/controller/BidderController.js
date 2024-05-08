const Auction = require("../Model/AuctionModel");
const participants = require("../Model/ParticipantsModel");
module.exports.createBid = async (req, res) => {
  const { auctionID, userID, price } = req.body;
  try {
    const auction = await Auction.findOne({ _id : auctionID });
    console.log(auction, "1234");
    console.log(auctionID, "123454")
    if(!auction){
      return res.status(404).json({
        success: false,
        message: "Auction not found 123 ",
      });
    }
    if(auction.status === "OPEN") {
      const result = await participants.findOne({ auctionID: auctionID});
      if (!result) {
        return res.status(404).json({
          success: false,
          message: "Auction not found",
        });
      }
      const length = result.participants.length
      if(price <= result.participants[length - 1].price) {
        
        return res.status(201).json({
          success: false,
          message: "Price must be higher"
        })
      }
      const newBid = await participants.findOneAndUpdate(
        { auctionID: auctionID },
        {
          $push: { participants: { bidderId: userID, price: price } },
        },
      );
      res.status(201).json({
        success: true,
        message: "Create bid successfully",
        newBid,
      });
    }
    else {
      return res.status(404).json({
        message: "Auction doesn't started yet",
    })
  } 
} catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};





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
  const { status, name, startDate, endDate, startPrice, type } = req.query;
  const query = {softDelete: false};
  if (name) {
    query.name = { $regex: name, $options: "i" };
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
  if(status) {
    query.status = status
  }
  if(type) {
    query['product.type'] = type 
  }
  console.log(query)
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

module.exports.deleteBid = async (req, res) => {
    const { userID, auctionID } = req.body;
    try {
      const result = await participants.findOne({ auctionID: auctionID });
      if (!result) {
        return res.status(404).json({
          success: false,
          message: "Auction not found",
        });
      }
      const newBid = await participants.findOne({ auctionID: auctionID })
      const newParticipants = newBid.participants
      for(i = newParticipants.length - 1; i >= 0; i --) {
        if(newParticipants[i].bidderId == userID) {
          newParticipants.splice(i, 1);
          break
        }
      } 
      await participants.findOneAndUpdate({ auctionID: auctionID }, { participants: newParticipants });    

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
