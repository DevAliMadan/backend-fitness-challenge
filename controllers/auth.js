const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/user')

const SECRET = process.env.SECRET || 'supersecret' // use process.env.SECRET in production

// POST /auth/register
exports.register = async (req, res) => {
  try {
    const { username, password, role, age, height, weight, gender} = req.body

    // check if username taken
    const existing = await User.findOne({ username })
    if (existing) {
      return res.status(400).json({ message: 'Username already exists' })
    }

    // hash password
    const passwordHash = await bcrypt.hash(password, 8)

    // create user
    const newUser = new User({ username, passwordHash, role, age, height, weight, gender })
    await newUser.save()

    res.status(201).json({ message: 'User registered successfully' })
  } catch (err) {
    res.status(500).json({ message: 'Server error' })
  }
}

// POST /auth/login
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body
    const user = await User.findOne({ username })

    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' })
    }

    const isValid = await user.validatePassword(password)
    if (!isValid) {
      return res.status(401).json({ message: 'Invalid username or password' })
    }

    const payload = {
      id: user._id,
      // Add anything else that you want to put into the JWT token here
      username: user.username,
      role: user.role
    }
    const token = jwt.sign(payload, SECRET, { expiresIn: '1w' }) //Look at the docs for more 'expires in' options
    res.json({ token,
    user: {
        id: user._id,
        username: user.username,
        role: user.role,
        age: user.age,
        height: user.height,
        weight: user.weight,
        gender: user.gender
  } })
  } catch (err) {
    res.status(500).json({ message: 'Server error' })
  }
}