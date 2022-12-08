const mongoose = require("mongoose")

const resumeSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    Fname: {
        type: String,
    },
    Lname: {
        type: String,
    },
    email: {
        type: String,
    },
    contact: {
        type: Number,
        trim: true,
        required: [true, "Please enter your contact number"],
        min: 10
    },
    address: {
        type: String,
    },
    education: {
        type: Object,
    },
    projects: {
        type: [Object]
    },
    skills: {
        type: [String],
    },
    certificate: {
        type: [String],
    },
    portfolio_or_works: {
        type: [String]
    },
    accomplishments: {
        type: [String]
    }

}, { timestamps: true })


module.exports = mongoose.model("Resume", resumeSchema)
