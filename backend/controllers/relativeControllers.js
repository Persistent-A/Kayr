const asyncHandler = require('express-async-handler')
const Relatives = require('../models/relativesModel')

const getRelatives = asyncHandler(async(req, res) => {
    const relatives = await Relatives.find({user: req.user._id})
    res.status(200).json(relatives)
})

const registerRelative = asyncHandler( async(req, res) => {
    const {first_name, 
        last_name, 
        date_of_birth, 
        gender, 
        phone, 
        email, 
        address, 
        marital_status, 
        past_medical_history, 
        allergies} = req.body

    if(!first_name || !last_name || !date_of_birth || !gender || !phone || !email || !address || !marital_status || !past_medical_history || !allergies){
        res.status(400)
        throw new Error ("Please fill all the fields")
    }

    const relative = await Relatives.create({
        user: req.user._id,
        first_name, 
        last_name, 
        date_of_birth, 
        gender, 
        phone, 
        email, 
        address, 
        marital_status, 
        past_medical_history, 
        allergies
    })

    res.status(201).json(relative)
})

const updateRelative = asyncHandler(async(req, res) => {
    const relative = await Relatives.findById(req.params.id)
    if (req.user._id.toString() !== relative.user.toString()) {
        res.status(401)
        throw new Error('User not Authorized')
    }
    else {
        const updatedRelative = await Relatives.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        res.status(200). json(updatedRelative)
    }
})

module.exports = { registerRelative, updateRelative, getRelatives }