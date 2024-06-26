const mongoose = require('mongoose');

const auctionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    product: {
        name: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        img: {
            type: String,
            required: true,
        }
    },
    timeStart: {
        type: Date,
        required: true,
    },
    timeEnd: {
        type: Date,
        required: true,
    },
    startPrice: {
        type: Number,
        required: true,
    },
    sellerID: {
        type: String,
        required: true,
    },
    winnerID: {
        type: String,
        required: false,
        default : null
    },
    status: {
        type: String,
        enum: ['INCOMING', 'OPEN', 'CLOSED', 'CANCELED'],
        default: 'INCOMING'
    },
    softDelete: {
        type: Boolean,
        default: false
    }
});

const Auction = mongoose.model('auction', auctionSchema);

module.exports = Auction;