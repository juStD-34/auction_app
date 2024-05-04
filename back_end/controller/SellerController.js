const Auction = require("../Model/AuctionModel");
const Participants = require("../Model/ParticipantsModel");
module.exports.createAuction = async (req, res) => {
    const {
        auctionName,
        productName,
        productType,
        productImg,
        timeStart,
        timeEnd,
        startPrice,
        sellerID } = req.body;
    // const image = Buffer.from(productImg, "base64");
    try {
        const newAuction = await Auction.create({
            name: auctionName,
            product: {
                name: productName,
                type: productType,
                img: productImg
            },
            timeStart,
            timeEnd,
            startPrice,
            sellerID
        });
        const auctionID = newAuction._id;
        const newParticipants = await Participants.create({
            auctionID,
            participants: []
        })
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
    // res.status(200).json({ msg: "create auction" });
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
module.exports.deleteAuction = async (req, res) => {
    res.json({ msg: "delete auction" });
}

module.exports.getAllAuction = async (req, res) => {
    res.json({ msg: "get all auction" });
}

module.exports.getAuctionByID = async (req, res) => {
    res.json({ msg: "get auction by id" });
}

module.exports.stopAuction = async (req, res) => {
    res.json({ msg: "stop auction" });
}

//thieu giai doan thanh toan