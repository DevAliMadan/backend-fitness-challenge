const mongoose = require('mongoose')
const bcrypt = require('bcrypt')



const validRoles = ['trainer', 'challenger']

const userSchema = new mongoose.Schema({
     username: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    role: {type: String, enum: validRoles, default: 'challenger'},
    age: {type: Number},
    height: {type: Number},
    weight: {type: Number},
    gender: {enum: ['male', 'female']}
})


userSchema.methods.validatePassword = function (password) {
  return bcrypt.compare(password, this.passwordHash)
}

module.exports = mongoose.model('User', userSchema)