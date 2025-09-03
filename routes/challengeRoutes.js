const express = require('express')
const router = express.Router()
const secureRoute = require('../middleware/secureRoute')
// Controller
const challengeController = require('../controllers/challengeController')


router.post('/create', challengeController.createChallenge)
router.get('/challenges', secureRoute, challengeController.getChallenge)
router.get('/challenges/:id', challengeController.showChallenge)
router.put('/challenges/:id', challengeController.updateChallenge)
router.delete('/challenges/:id', challengeController.deleteChallenge)



module.exports = router