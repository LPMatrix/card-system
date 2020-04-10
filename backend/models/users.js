const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require("mongoose-unique-validator")
const userSchma = new Schema({
    firstname: {
        type: String,
        required: true
    },
    middlename: {
        type: String,
        required: true
    },
    lastname: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    zone: {
        type: String,
        required: true
    },
    unit: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    phone_no: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required : true
    },
    vehicle_no: {
        type: String,
        required: true
    },
    
    fingerprint_thumb: {
        type: String,
        
    },
    fingerprint_index: {
        type: String
    },
    uniqueId: {
        type: String,
        required: true,
        unique: true
    },
    password : {
        type : String,
        required : true
    },
    resetToken: String,
    resetTokenExpiration: Date,
    updatedAt: {
        type: Date,
        default: Date.now()
    },
    agentId: {
        type: Schema.Types.ObjectId,
        required:true,
        ref: 'Agent'
    },
    approve : {
        type: Boolean,
        default: false
    }
});

userSchma.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchma);