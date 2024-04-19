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
            type: Buffer,
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
    participants: [
        {
            bidderId: {
                type: Number,
                required: false,
            },
            price: {
                type: Number,
                required: false,
            },
        },
    ],
    sellerID: {
        type: Number,
        required: true,
    },
});

const Auction = mongoose.model('Auction', auctionSchema);

module.exports = Auction;