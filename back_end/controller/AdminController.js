const Auction = require("../Model/AuctionModel");
const User = require("../Model/UserModel");
const Transaction = require("../Model/TransactionModel");
module.exports.getAllAuction = async (req, res) => {
    try {
        const allAuction = await Auction.find({softDelete: false});
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

module.exports.addBudget = async (req, res) => {
    try {
        const{amount} = req.body
       
        const user = await User.findById(req.params.id)
        console.log(user.budget)
        user.budget = user.budget + amount
        console.log(user.budget)
        user.save()
        
        res.status(201).json({
            success: true,
            message: "Update user successfully",
            user
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
}
module.exports.getAllBidder = async (req, res) => {
    const role = "BIDDER";
    try{
        const allBidder = await User.find({role});
        res.status(201).json({
            success: true,
            message: "Get all bidder successfully",
            allBidder
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
}

module.exports.getAllSeller = async (req, res) => {
    const role = "SELLER";
    try{
        const allSeller = await User.find({role});
        res.status(201).json({
            success: true,
            message: "Get all seller successfully",
            allSeller
        });
    }    catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
}

module.exports.payForAuction = async (req, res) => {
    const { auctionID } = req.params;
    const auction = await Auction.findById(auctionID);
    const transaction = await Transaction.findOne({ auctionID: auctionID });
    const sellerId = auction.sellerID;
    const bidderId = auction.winnerID;
    const bidder = await User.findById(bidderId);
    const seller = await User.findById(sellerId);
    const amount = transaction.payment.amount
    if(bidder.budget < amount) {
        res.status(200).json({
            success: false,
            message: "You don't have enough money"
        })
    } else {
        bidder.budget = bidder.budget - amount
        seller.budget = seller.budget + amount
        await bidder.save()
        await seller.save()
        res.status(200).json({
               success: true,
            message: "Pay successfully"
        })
    }
}

module.exports.getIncomingAuction = async (req, res) => {
    try {
        const result = await Auction.find({
            timeStart: { $gt: new Date() },
            softDelete: false
        })
        if (!result) {
            return res.status(404).json({
                success: false,
                message: "Incoming auction not found",
            });
        }

        res.status(201).json({
            success: true,
            message: "Get incoming auction successfully",
            result
        });
    }catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
}

module.exports.getOccuringAuction = async (req, res) => {
    try{
        const result = await Auction.find({
            timeStart: { $lt: new Date() },
            timeEnd : { $gt: new Date() },
            softDelete: false
        })
        if(!result) {
            return res.status(404).json({
                success: false,
                message: "Occuring auction not found",
            });
        }
        res.status(201).json({
            success: true,
            message: "Get occuring auction successfully",
            result
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
}