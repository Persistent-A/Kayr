const mongoose = require("mongoose")

const engagementSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "Cant map User with engagements"],
        ref: "Users"
    },
    patient_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "Cant map relative with engagements"],
        ref: "Patients"
    },
    appointment_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "Cant map appointment with engagements"],
        ref: "Patients"
    },
    health_pro_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "Cant map  with engagements"],
        ref: "HealthProfessionals"
    },
},
{
    timestamps: true
})

module.exports = mongoose.model("Engagements", engagementSchema);