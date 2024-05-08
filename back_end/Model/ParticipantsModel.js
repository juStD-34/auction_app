const mongoose = require('mongoose');

const participantsSchema = new mongoose.Schema({
    
    auctionID : {
        type: String,
        required: true,
    },
    participants: [
        {
            bidderId: {
                type: String,
                required: false,
            },
            price: {
                type: Number,
                required: false,
            },
            
        },
    ],
});

const Participants = mongoose.model('Participants', participantsSchema);
module.exports = Participants;