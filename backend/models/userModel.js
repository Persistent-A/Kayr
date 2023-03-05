const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: [true, 'Please enter your first name']
    },
    last_name: {
        type: String,
        required: [true, 'Please enter your last name']
    },
    age: {
        type: String,
    },
    gender: {
        type: String,
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
    address: {
        type: String,
    }
},
{
    timestamp: true
}) 

module.exports = mongoose.model('Users', userSchema)