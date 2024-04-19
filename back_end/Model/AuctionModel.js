const mongoose = require("mongoose")

const auctionSchema = new mongoose.Schema({
    id: {
        type: String,
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
    },
    createdBy: {
        type: String,
        ref: "User",
      
    }
})

module.exports = mongoose.model("Auction", auctionSchema)

