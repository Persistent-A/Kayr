const { Int32 } = require('bson')
const mongoose = require('mongoose')

const healthProfessionalsSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: [true, 'Please enter your first name']
    },
    last_name: {
        type: String,
        required: [true, 'Please enter your last name']
    },
    phone: {
        type: String,
        required: [true, 'Please enter your phone']
    },
    email: {
        type: String,
        required: [true, 'Please enter your email']
    },
    password: {
        type: String,
        required: [true, 'Please enter your password']
    },
    gender: {
        type: String
    },
    address: {
        type: Object
    },
    specialization: {
        type: Array
    },
    language: {
        type: Array
    },
    availability: {
        type: String
    },
    credentials: {
        type: Array
    },
    isApproved: {
        type: Boolean
    },
    age: {
        type: Number
    }
},
{
    timestamp: true
})

module.exports = mongoose.model('HealthProfessionals', healthProfessionalsSchema)