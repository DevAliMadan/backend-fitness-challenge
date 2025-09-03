const mongoose = require('mongoose')

const goalSchema = new mongoose.Schema({
    challenger: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
    goal: {type: String, enum: ["bulk", "cut", "maintain"],  required: true},
    dailyCalories: Number
})

module.exports = mongoose.model("Goal",  goalSchema)