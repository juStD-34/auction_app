const Auction = require("../Model/AuctionModel");

module.exports.createAuction = async (req, res) => {

    const { title, description, image, category } = req.body;
    console.log(req.user)
    try {
        const newAuction = await Auction.create({
            title,
            description,
            image,
            category,
            createdBy: req.user
        });
        res.status(201).json({
            success: true,
            message: "Auction created successfully",
            newAuction,
            createdBy: req.user
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
}