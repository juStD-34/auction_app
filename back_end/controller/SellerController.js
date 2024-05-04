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
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
    // res.status(200).json({ msg: "create auction" });
}

// module.exports.updateAuctionById = async (req, res) => {
//     try {
//         const auction = await Auction.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         res.status(201).json({
//             success: true,
//             message: "Update auction successfully",
//             auction
//         });
//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: "Internal server error",
//             error: error.message,
//         });
//     }
// }
module.exports.deleteAuction = async (req, res) => {
    const {auctionID} = req.params;
    try {
        const deleteAuction = await Auction.findByIdAndUpdate(auctionID, {softDelete: true});
        res.status(201).json({
            success: true,
            message: "Delete auction successfully",
            deleteAuction
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
}

module.exports.getAllAuctionByID = async (req, res) => {
    const {sellerID} = req.params;
    const existSeller = await Auction.findOne({sellerID});
    if(!existSeller){
        return res.status(404).json({
            success: false,
            message: "Seller not found",
        });
    }
    try{
        const ownerAuction = await Auction.find({sellerID});
        res.status(201).json({
            success: true,
            message: "Get all auction successfully",
            ownerAuction
        });
    }
    catch(error){
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
    // res.json({ msg: "get all auction" });
}

module.exports.getAuctionByID = async (req, res) => {
    res.json({ msg: "get auction by id" });
}

module.exports.stopAuction = async (req, res) => {
    res.json({ msg: "stop auction" });
}

//thieu giai doan thanh toan