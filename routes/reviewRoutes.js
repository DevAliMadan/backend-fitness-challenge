const express = require("express")
const router = express.Router() 
// Controller
const reviewController = require("../controllers/reviewController")
const secureRoute = require("../middleware/secureRoute")
const checkRole = require("../middleware/roleCheck")


router.post("/", checkRole("challenger", "create_review"), secureRoute, reviewController.createReview)
router.get("/:id", reviewController.showReview)
router.put("/:id", checkRole("challenger", "update_review"), secureRoute, reviewController.updateReview)
router.delete("/:id", checkRole("challenger", "delete_review"), secureRoute, reviewController.deleteReview)

module.exports = router
