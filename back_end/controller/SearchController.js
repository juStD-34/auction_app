const Auction = require("../Model/AuctionModel");

module.exports.search = async (req, res) => {
    const { auctionName, startDate, endDate, startPrice, type } = req.body;
    const query = {};
    if (auctionName) {
        query.auctionName = { $regex: auctionName, $options: "i" }
    }
    if (startDate) {
        query.timeStart = { $gte: new Date(startDate) }
    }
    if (endDate) {
        query.timeEnd = { $lte: new Date(endDate) }
    }
    if (startPrice) {
        query.startPrice = { $gte: startPrice }
    }
    if (type) {
        query.productType = { $regex: type, $options: "i" }
    }

    try {
        const searchResult = await Auction.find(query);
        res.status(201).json({
            success: true,
            message: "Search successful",
            searchResult
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}