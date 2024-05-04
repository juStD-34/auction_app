const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
    auctionID :{
        type: String,
        required: true,
    },
    bidderID : {
        type: String,
        required: true,
    },
    auctionID : {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    payment: {
        amount: {
            type: Double,
            required: false
        },
        paidAt : {
            type: Date,
            required: false
        }
    }

});