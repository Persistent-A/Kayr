const mongoose = require('mongoose')

const appointmentsSchema = mongoose.Schema({
    appointment_booktime: {
        type: Date
    },
    appointment_attend_time: {
        type: Date
    },
    appointment_end_time:{
        type: Date
    },
    isRejected_appointment:{
        type: Boolean
    }

})

module.exports = mongoose.model('Appointment', appointmentsSchema)