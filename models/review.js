const mongoose = require('mongoose')



const reviewSchema = new mongoose.Schema({
    challengeId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Challenge", 
        required: true
    },
    challengerId:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User", 
        required: true
    },
    comment: String
})

module.exports = mongoose.model("Review", reviewSchema)