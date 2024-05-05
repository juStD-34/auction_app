const mongoose = require("mongoose");
const Auction = require("./AuctionModel");

const notificationSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true,
    },
    content : {
        type: String,
        required: true,
    },
    date : {
        type: Date,
        default: Date.now()
    },
    receiverID: {
        type: String,
        required: true,
    },
    auctionID: {   
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['unread', 'read'],
        default: 'unread' 
    }
});

const Notification = mongoose.model("Notifications", notificationSchema);

module.exports = Notification