const mongoose = require('mongoose');

const participantsSchema = new mongoose.Schema({
    
    auctionID : {
        type: String,
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
            softDelete:{
                required: true,
                type: Boolean,
                default: false
            },
            
        },
    ],
});

const Participants = mongoose.model('Participants', participantsSchema);
module.exports = Participants;