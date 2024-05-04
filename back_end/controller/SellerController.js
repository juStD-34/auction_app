const Auction = require("../Model/AuctionModel");
const Participants = require("../Model/ParticipantsModel");
const {findWinner} = require("../controller/AuctionController");

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
        const existSeller = await Auction.findOne({ sellerID });
        if (!existSeller) {
            return res.status(404).json({
                success: false,
                message: "Seller not found",
            });
        }
        const ownerAuction = await Auction.find({ sellerID });
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
        const existAuction = await Auction.findById(auctionID);
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
    // res.json({ msg: "get auction by id" });
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
        const existAuction = await Auction.findById(auctionID);
        if (!existAuction) {
            return res.status(404).json({
                success: false,
                message: "Auction not found",
            });
        } else {
            if (existAuction.timeEnd < Date.now()) {
                return res.status(400).json({
                    success: false,
                    message: "Auction already stopped",
                });
            }
            existAuction.timeEnd = Date.now();
            existAuction.save();

            //step 2: find winner
            const winner = await findWinner(auctionID);

            //step 3: send notification
            
            res.status(201).json({
                success: true,
                message: "Stop auction successfully",
                winner
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