const goal = require('../models/goal')



const createGoal = async (req, res) =>{
    try{
        const createGoal = await goal.create(req.body)
        res.status(201).json(createGoal)
    }
    catch(err){
        console.log(err)
        res.status(500).json({error: err.message})
    }
}


const showGoal = async (req, res) =>{
    try{
        const oneGoal = await goal.findById(req.params.id)
        if (oneGoal) {
            res.status(200).json(oneGoal)
        } else {
            res.sendStatus(404)
        }
    }
    catch(err){
        console.log(err)
        res.status(500).json({error: err.message})
    }
}

const updateGoal = async (req, res) =>{
    try{
        const update = await goal.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(update)
    }
    catch(err){
        console.log(err)
        res.status(500).json({error: err.message})
    }
}
module.exports = {
    createGoal,
    showGoal,
    updateGoal

}