const challenge = require('../models/challenge')


const createChallenge = async (res, req) =>{
    try{
        const createChallenge = await challenge.create(req.body)
        res.status(201).json(createChallenge)
    }
    catch(err){
        console.log(err)
        res.status(500).json({error: err.message})
    }
}
const getChallenge = async (res, req) =>{
    try{

    }
    catch(err){
        console.log(err)
        res.status(500).json({error: err.message})
    }
}

const showChallenge = async (res, req) =>{
    try{

    }
    catch(err){
        console.log(err)
        res.status(500).json({error: err.message})
    }
}
const updateChallenge = async (res, req) =>{
    try{

    }
    catch(err){
        console.log(err)
        res.status(500).json({error: err.message})
    }
}
const deleteChallenge = async (res, req) =>{
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