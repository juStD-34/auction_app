const mongoose = require("mongooese")

const auctionSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
    }
})

module.exports = mongoose.model("Auction", auctionSchema)

