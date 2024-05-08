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
    createdAt: {
        type: Date,
        default: Date.now
    },
    payment: {
        amount: {
            type: Number,
            required: true
        },
        paidAt : {
            type: Date,
            required: false,
            default: null
        },
        softDelete : {
            type: Boolean,
            required: true,
            default: false
        }
    }
});

const Transaction = mongoose.model("Transactions", transactionSchema);

module.exports = Transaction;