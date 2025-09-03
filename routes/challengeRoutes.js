const express = require('express')
const router = express.Router()
const secureRoute = require('../middleware/secureRoute')
// Controller
const challengeController = require('../controllers/challengeController')


router.post('/create', challengeController.createChallenge)
router.get('/', secureRoute, challengeController.getChallenge)
router.get('/:id', challengeController.showChallenge)
router.put('/:id', challengeController.updateChallenge)
router.delete('/:id', challengeController.deleteChallenge)



module.exports = router