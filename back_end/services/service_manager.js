const Participants = require("../Model/ParticipantsModel");
const Auction = require("../Model/AuctionModel");
const Transaction = require("../Model/TransactionModel");
const Notification = require("../Model/NotificationModel");


async function findEndAuction() {
    try {
        const completeAuctions = await Auction.find({
            timeEnd: { $lte: Date.now() },
            status: { $ne: "CLOSED" },
            softDelete: false
        });
        console.log("completeAuctions: ", completeAuctions);
        if (completeAuctions && completeAuctions.length > 0) {
            // console.log("have")
            for (const auction of completeAuctions) {
                await endAuction(auction);
            }
        }
    } catch (error) {
        console.error("Error in findEndAuction:", error);
    }
}

async function findStartAuction() {
    const now = Date.now();
    console.log("findStartAuction: ", now);
    try {
        const startAuctions = await Auction.find({
            timeStart: { $lte: Date.now() },
            timeEnd: { $gte: Date.now() },
            status: "INCOMING",
            softDelete: false
        });
        console.log("startAuctions: ", startAuctions);
        if (startAuctions && startAuctions.length > 0) {
            // console.log("have")
            for (const auction of startAuctions) {
                await startAuction(auction);
            }
        }
    } catch (error) {
        console.error("Error in findStartAuction:", error);
    }
}

async function endAuction(auction) {
    try {
        console.log("endAuction: ", auction);

        const winner = await findWinner(auction._id);
        if (winner.bidderId == null) {
            const failNotification = new Notification({
                title: "Fail Auction",
                content: "Your auction don't have anyone get bid!",
                receiverID: auction.sellerID,
                auctionID: auction._id,
                image: auction.product.img
            })
            failNotification.save();
            console.log("endAuction fail ")
        } else {
            // console.log(winner, auction._id)
            const transaction = new Transaction({
                auctionID: auction._id,
                bidderID: winner.bidderId,
                sellerID: auction.sellerID,
                payment: {
                    amount: winner.price,
                }

            });
            transaction.save();
            auction.winnerID = winner.bidderId;
            // auction.save();
            const notification = new Notification({
                title: "End Auction",
                content: "You are winner of the auction",
                receiverID: winner.bidderId,
                auctionID: auction._id,
                image: auction.product.img
            })
            const notification2 = new Notification({
                title: "End Auction",
                content: "Your auction ended!",
                receiverID: auction.sellerID,
                auctionID: auction._id,
                image: auction.product.img
            })
            notification.save();
            notification2.save();
            console.log("endAuction success ");
            auction.timeEnd = new Date();
            auction.status = "CLOSED";
            auction.save();
        }
    }
    catch (error) {
        throw new Error("Failed to end auction");
    }
}

async function startAuction(auction) {
    try {
        console.log("startAuction: ", auction);
        auction.timeStart = new Date();
        auction.status = "OPEN";
        auction.save();
        const notification = new Notification({
            title: "Start Auction",
            content: "Your auction has started!",
            receiverID: auction.sellerID,
            auctionID: auction._id,
            image: auction.product.img
        })
        notification.save();
        console.log("startAuction success ");
    }
    catch (error) {
        throw new Error("Failed to start auction");
    }
}


async function findWinner(auctionID) {
    try {
        const participants = await Participants.findOne({ auctionID: auctionID });
        const winner = participants.participants[participants.participants.length - 1];
        return winner;
    }
    catch (error) {
        throw new Error("Failed to find winner");
    }
}

const interval = setInterval(findEndAuction, 60000);
const startInterval = setInterval(findStartAuction, 10000);

module.exports = { findWinner, endAuction }