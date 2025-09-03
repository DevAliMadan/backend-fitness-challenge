
const challenge = require('../models/challenge')



const createChallenge = async (req, res) =>{
    try{
        const createChallenge = await challenge.create(req.body)
        res.status(201).json(createChallenge)
    }
    catch(err){
        console.log(err)
        res.status(500).json({error: err.message})
    }
}
const getChallenge = async (req, res) =>{
    try{
        const allChallenges = await challenge.find().populate("trainer")
        if (allChallenges.length) {
            res.status(200).json(allChallenges)
        } else{
            res.sendStatus(204)
        }
    }
    catch(err){
        console.log(err)
        res.status(500).json({error: err.message})
    }
}

const showChallenge = async (req, res) =>{
    try{
        const oneChallenge = await challenge.findById(req.params.id).populate("trainer")
        if (oneChallenge) {
            res.status(200).json(oneChallenge)
        } else {
            res.sendStatus(404)
        }
    }
    catch(err){
        console.log(err)
        res.status(500).json({error: err.message})
    }
}
const updateChallenge = async (req, res) =>{
    try{
        const update = await challenge.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(update)
    }
    catch(err){
        console.log(err)
        res.status(500).json({error: err.message})
    }
}

const deleteChallenge = async (req, res) =>{
    try{
        const deleteChallenge = await challenge.findByIdAndDelete(req.params.id)
        if (deleteChallenge) {
            res.status(200).json(deleteChallenge)
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
    createChallenge,
    getChallenge,
    showChallenge,
    updateChallenge,
    deleteChallenge,
}