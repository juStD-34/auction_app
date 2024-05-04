const Auction = require("../Model/AuctionModel");

module.exports.getAllAuction = async (req, res) => {
    // try {
    //     const allAuction = await Auction.find();
    //     res.status(201).json({
    //         success: true,
    //         message: "Get all auction successfully",
    //         allAuction
    //     });
    // } catch (error) {
    //     res.status(500).json({
    //         success: false,
    //         message: "Internal server error",
    //         error: error.message,
    //     });
    // }

    res.status(200).json({msg: "get all auction"});
}

module.exports.getAllBidder = async (req, res) => {
    const role = "BIDDER";
    res.status(200).json({msg: "get all user"});
}

module.exports.getAllSeller = async (req, res) => {
    const role = "SELLER";
    res.status(200).json({msg: "get all user"});
}
