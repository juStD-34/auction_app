const Auction = require("../Model/AuctionModel");

module.exports.createAuction = async (req, res) => {
    const {auctionName, productName, productType, productImg, timeStart, timeEnd, startPrice, sellerId} = req.body;
    //this is not complete version. Img need to turn into binary.
    try {
        const newAuction = await Auction.create({
            auctionName,
            productName,
            productType,
            productImg,
            timeStart,
            timeEnd,
            startPrice,
            sellerId
        });
        res.status(201).json({
            success: true,
            message: "Auction created successfully",
            newAuction
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
}