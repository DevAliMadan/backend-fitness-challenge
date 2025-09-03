const express = require('express')
const router = express.Router()
const secureRoute = require('../middleware/secureRoute')
// Controller
const challengeController = require('../controllers/challengeController')
const checkRole = require("../middleware/roleCheck")

router.post('/create', checkRole("trainer", "create_challenge"),challengeController.createChallenge)
router.get('/', secureRoute, challengeController.getChallenge)
router.get('/:id', challengeController.showChallenge)
router.put('/:id',checkRole("trainer", "create_challenge"), challengeController.updateChallenge)
router.delete('/:id',checkRole("trainer", "create_challenge"), challengeController.deleteChallenge)



module.exports = router