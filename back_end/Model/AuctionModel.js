const mongoose = require('mongoose');

const auctionSchema = new mongoose.Schema({
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
        required: true,
      },
      price: {
        type: Number,
        required: true,
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