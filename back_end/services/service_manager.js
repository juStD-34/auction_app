const Participants = require("../Model/ParticipantsModel");
const Auction = require("../Model/AuctionModel");
const Transaction = require("../Model/TransactionModel");
const Notification = require("../Model/NotificationModel");


async function findEndAuction() {
    const now = new Date();
    console.log("findEndAuction: ", now);
    try {
        const completeAuctions = await Auction.find({
            timeEnd: { $lte: new Date() },
            winnerID: null,
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

async function endAuction (auction){
    console.log("endAuction: ", auction);

    const winner = await findWinner(auction._id);
    console.log(winner, auction._id)
    const transaction = new Transaction({
        auctionID: auction._id,
        bidderID: winner.bidderId,
        sellerID: auction.sellerID,
        payment: {
            amount: winner.price,
        }

    });
    transaction.save();
    auction.winnerID = winner._id;
    auction.save();
    const notification = new Notification({
        title:"End Auction",
        content: "You are winner of the auction",
        receiverID: winner.bidderId,
        auctionID: auction._id

    })
    const notification2 = new Notification({
        title:"End Auction",
        content: "Your auction ended!",
        receiverID: auction.sellerID,
        auctionID: auction._id
    })
    notification.save();
    notification2.save();
}


async function findWinner (auctionID) {
    try {
        const participants = await Participants.findOne({auctionID: auctionID});
        const winner = participants.participants[participants.participants.length - 1];
        return winner;
    }
    catch (error) {
        throw new Error("Failed to find winner");
    }
}

const interval = setInterval(findEndAuction, 60000);

module.exports = {endAuction}