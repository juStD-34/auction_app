const Auction = require("../Model/AuctionModel");

module.exports.createAuction = async (req, res) => {
    const { title, description, image, category,startPrice } = req.body;
    console.log(req.user)
    try {
        const newAuction = await Auction.create({
            title,
            description,
            image,
            category,
            startPrice,
            softDelete: false
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
            error: error.message,
        });
    }
}

module.exports.getAllAuction = async (req, res) => {
    try {
        const allAuction = await Auction.find();
        res.status(201).json({
            success: true,
            message: "Get all auction successfully",
            allAuction
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
}

module.exports.getAuctionById = async (req, res) => {
    try {
        const auction = await Auction.findById(req.params.id);
        res.status(201).json({
            success: true,
            message: "Get auction successfully",
            auction
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
}

module.exports.updateAuctionById = async (req, res) => {
    try {
        const auction = await Auction.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(201).json({
            success: true,
            message: "Update auction successfully",
            auction
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
}

module.exports.deleteAuctionById = async (req, res) => {
    try {
        const auction = await Auction.findByIdAndUpdate({softDelete: true});
        res.status(201).json({
            success: true,
            message: "Delete auction successfully",
            auction
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
}
