const challenge = require('../models/challenge')
const challenge = require('../models/challenge')
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
        const allChallenges = await challenge.find()
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
        const challenge = await challenge.find
    }
    catch(err){
        console.log(err)
        res.status(500).json({error: err.message})
    }
}
const updateChallenge = async (req, res) =>{
    try{

    }
    catch(err){
        console.log(err)
        res.status(500).json({error: err.message})
    }
}
const deleteChallenge = async (req, res) =>{
    try{

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