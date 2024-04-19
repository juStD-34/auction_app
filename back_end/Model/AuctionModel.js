const mongoose = require('mongoose');

const auctionSchema = new mongoose.Schema({
    // Product details
    product: {
        name: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: false, // Not required, as you specified
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true, // Reference to User model
        },
        softDelete: {
            type: Boolean,
            default: false,
        },
        participants: {
            type: [mongoose.Schema.Types.ObjectId],
            ref: 'User', // List of participants (reference to User model)
            default: []
        },
        startPrice: {
            type: Number,
            required: true,
        },
        img: {
            type: Buffer,
            required: true,
        }
    },
    // Auction timing
    timeStart: {
        type: Date,
        required: true,
    },
    timeEnd: {
        type: Date,
        required: true,
    },
    // Auction participants and bids
    participants: [
        {
            bidderId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                required: true, // Reference to User model
            },
            price: {
                type: Number,
                required: true,
            },
        },
    ],
    // Seller ID
    sellerID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

const Auction = mongoose.model('Auction', auctionSchema);

module.exports = Auction;
