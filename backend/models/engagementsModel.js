const mongoose = require("mongoose")

const engagementSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "Cant map User with engagements"],
        ref: "Users"
    },
    relative_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "Cant map relative with engagements"],
        ref: "Relatives"
    },
    appointment_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "Cant map appointment with engagements"],
        ref: "Appointments"
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