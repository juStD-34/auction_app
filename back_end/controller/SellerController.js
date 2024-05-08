const Auction = require("../Model/AuctionModel");
const Participants = require("../Model/ParticipantsModel");
const User = require("../Model/UserModel");
const { endAuction } = require("../services/service_manager");

//done
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
    console.log("XXXXX", typeof (productImg))
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
            sellerID,
            softDelete: false
        });
        const auctionID = newAuction._id;
        const newParticipants = await Participants.create({
            auctionID,
            participants: [{
                bidderId: null,
                price: startPrice,
            }]
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

//done
module.exports.deleteAuction = async (req, res) => {
    const { auctionID } = req.params;
    try {
        const deleteAuction = await Auction.findByIdAndUpdate(auctionID, { softDelete: true });
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

//done
module.exports.getAllAuctionByID = async (req, res) => {
    const { sellerID } = req.params;

    try {
        const existSeller = await User.find({ _id: sellerID, softDelete: false });
        if (!existSeller) {
            return res.status(404).json({
                success: false,
                message: "Seller not found",
            });
        }
        const ownerAuction = await Auction.find({ sellerID: sellerID, softDelete: false });
        if (ownerAuction.length == 0) {
            return res.status(404).json({
                success: false,
                message: "Don't have auction",
            });
        }
        res.status(201).json({
            success: true,
            message: "Get all auction successfully",
            ownerAuction
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
    // res.json({ msg: "get all auction" });
}

//done
module.exports.getAuctionByID = async (req, res) => {
    const { auctionID } = req.params;

    try {
        const existAuction = await Auction.find({ _id: auctionID, softDelete: false });
        if (!existAuction) {
            return res.status(404).json({
                success: false,
                message: "Auction not found",
            });
        } else {
            res.status(201).json({
                success: true,
                message: "Get auction successfully",
                existAuction

            });
        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
}



/*
    step 1: set auction's endTime to now
    step 2: find winner 
    step 3: send notification
*/
module.exports.stopAuction = async (req, res) => {
    const { auctionID } = req.params;

    try {
        //step 1: set timeEnd to now
        const existAuction = await Auction.findOne({ _id: auctionID, softDelete: false });
        if (!existAuction) {
            return res.status(404).json({
                success: false,
                message: "Auction not found",
            });
        } else {
            if (existAuction.status == "CLOSED") {
                return res.status(400).json({
                    success: false,
                    message: "Auction already stopped",
                });
            }
            try {
                await endAuction(existAuction);
            }
            catch (error) {
                console.log(error);
            }
            // existAuction.timeEnd = Date.now();
            // existAuction.save();

            res.status(201).json({
                success: true,
                message: "Stop auction successfully",
                existAuction
            });
        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
    // res.json({ msg: "stop auction" });
}

//thieu giai doan thanh toan