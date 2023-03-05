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
        type: String
    },
    specialization: {
        type: String
    },
    language: {
        type: String
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
    reviews_by_patients: {
        type: String
    },
    age: {
        type: String
    },
    ratings: {
        type: String
    },
},
{
    timestamp: true
})

module.exports = mongoose.model('healthProfessionals', healthProfessionalsSchema)