const mongoose = require('mongoose')

const patientsSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Users'
    },
    first_name: {
        type: String,
        required: [true, 'Please enter your first name']
    },
    last_name: {
        type: String,
        required: [true, 'Please enter your last name']
    },
    date_of_birth: {
        type: Date,
        required: [true, 'Please enter your Date of Birth']
    },
    gender: {
        type: String,
        required: [true, 'Please select your gender']
    },
    phone: {
        type: String,
        required: [true, 'Please enter your phone']
    },
    email: {
        type: String,
        required: [true, 'Please enter your email']
    },
    address: {
        type: Object,
        required: [true, 'Please enter your address']
    },
    marital_status: {
        type: String,
        required: [true, 'Please enter your address']
    },
    past_medical_history: {
        type: Array,
        required: [true, 'Please enter your medical history']
    },
    allergies: {
        type: Array
    }
},{
    timeStamps: true
})

module.exports = mongoose.model('Patients', patientsSchema)