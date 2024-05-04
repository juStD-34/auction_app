const Auction = require("../Model/AuctionModel");

module.exports.createAuction = async (req, res) => {
    // const { title, description, image, category,startPrice } = req.body;
    // console.log(req.user)
    // try {
    //     const newAuction = await Auction.create({
    //         title,
    //         description,
    //         image,
    //         category,
    //         startPrice,
    //         softDelete: false
    //     });
    //     res.status(201).json({
    //         success: true,
    //         message: "Auction created successfully",
    //         newAuction
    //     });
    // } catch (error) {
    //     res.status(500).json({
    //         success: false,
    //         message: "Internal server error",
    //         error: error.message,
    //     });
    // }
    res.status(200).json({msg: "create auction"});
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
    res.json({msg: "delete auction"});
}

module.exports.getAllAuction = async (req, res) => {
    res.json({msg: "get all auction"});
}

module.exports.getAuctionByID = async (req, res) => {
    res.json({msg: "get auction by id"});
}

module.exports.stopAuction = async (req, res) => {
    res.json({msg: "stop auction"});
}

//thieu giai doan thanh toan