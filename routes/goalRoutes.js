const express = require('express')
const router = express.Router()
const secureRoute = require('../middleware/secureRoute')
// Controller
const goalController = require("../controllers/goalController")


router.post('/create', goalController.createGoal)
router.get('/:id', goalController.showGoal)
router.put('/:id', goalController.updateGoal)




module.exports = router