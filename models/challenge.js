const mongoose = require('mongoose')

const challengeSchema = new mongoose.Schema({
    img: { type: String }, //required: true },

    name: {type: String },

    trainer: {  
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true },
    
    name: String,
    description: String,
    type:{type: String, enum: ['bulk', 'cut', 'maintain']},
    duration: {type: Number }, //required: true},
  
    sets: {type: Number },

    date: {type: Date, default: Date.now },

    favorite: { type: Boolean, default: false },
})

module.exports = mongoose.model('Challenge', challengeSchema)