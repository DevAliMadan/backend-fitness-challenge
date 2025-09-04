const review = require('../models/review')

const createReview = async (req, res) => {
    try {
        const createReivew = await review.create(req.body)
        res.status(201).json(createReivew)
    }
    catch(err){
        console.log(err)
        res.status(500).json({error: err.message})
    }
}

const showReview = async (req, res) =>{
    try{
        const oneReview = await review.findById(req.params.id).populate("challenger")
        if (oneReview) {
            res.status(200).json(oneReview)
        } else {
            res.sendStatus(404)
        }
    }
    catch(err){
        console.log(err)
        res.status(500).json({error: err.message})
    }
}

const updateReview = async (req, res) =>{
    try{
        const update = await review.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(update)
    }
    catch(err){
        console.log(err)
        res.status(500).json({error: err.message})
    }
}
const deleteReview = async (req, res) =>{
    try{
        const deleteReview = await challenge.findByIdAndDelete(req.params.id)
        if (deleteReview) {
            res.status(200).json(deleteReview)
        } else {
            res.sendStatus(404)
        }
    }
    catch(err){
        console.log(err)
        res.status(500).json({error: err.message})
    }
}

module.exports = {
    createReview,
    showReview,
    updateReview,
    deleteReview
}