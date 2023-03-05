const asyncHandler = require('express-async-handler')
const Users = require('../models/userModel') 
const Patients = require('../models/patientsModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const registerUser = asyncHandler(async(req, res) => {
    const {first_name, last_name, phone, email, password} = req.body

    if(!first_name || !last_name || !phone || !email || !password){
        res.status(400)
        throw new Error("Please enter all the fields!")
    }

    const userExists = await Users.findOne({email})
    if(userExists) {
        res.status(400)
        throw new Error('User already exists!')
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await Users.create({
        first_name, 
        last_name, 
        phone, 
        email, 
        password: hashedPassword
    })

    if(!user){
        res.status(400)
        throw new Error("Account not registered")
    }

    res.status(201).json({
        _id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        phone: user.phone,
        email: user.email,
        token: await generateToken(user.id)
    })
    
    res.status(201).json({message: "You are registered"})
})

const loginUser = asyncHandler(async(req, res) => {
    const {email, password} = req.body
    
    if(!email || !password){
        res.status(400)
        throw new Error("Please enter all the fields")
    }

    const user = await Users.findOne({email})

    if(user && await bcrypt.compare(password, user.password)){
        res.status(200).json({
            _id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            phone: user.phone,
            email: user.email,
            token: await generateToken(user.id)
        })
    }else{
        res.status(400)
        throw new Error("User not found")
    }
})

const registerPatient = async(req, res) => {
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

    await Patients.create({
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

}

const generateToken = async(id) => {
    return await jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}


module.exports = {registerUser, loginUser, registerPatient};