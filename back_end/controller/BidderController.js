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
                return res.json({ status: false })
            } else {
                try {
                    const user_id = data.id
                    const query = { participants: { $elemMatch: { bidderId: user_id } } }
                    const searchResult = await Auction.find(query)
                    res.status(201).json({
                        success: true,
                        message: "Search successful",
                        searchResult
                    });
                } catch (error) {
                    res.status(500).json({ error: error.message })
                }
            }
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

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