const { Decimal128 } = require('bson')
const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Users"
    },
    health_pro_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "HealthProfessionals"
    },
    review: {
        type: String,
        required: [true, "Review Missing"],
    },
    rating: {
        type: Decimal128,
        required: [true, "rating missing"],
    },
    
},
{
    timestamps: true
})