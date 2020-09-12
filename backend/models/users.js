const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require("mongoose-unique-validator")
const userSchma = new Schema({
    firstname: {
        type: String,
        required: true
    },
    middlename: {
        type: String
    },
    surname: {
        type: String,
        required: true
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
    address: {
        type: String,
        required: true
    },
    branch: {
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
    next_of_kin_name: {
        type: String,
        required: true
    },
    next_of_kin_address: {
        type: String,
        required: true
    },
    next_of_kin_phone_no: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required : true
    },
    vehicleNumber: {
        type: String,
        required: true
    },
    transportation_type: {
        type: String,
        required: true
    },
    verifiedIdType: {
        type: String,
        required: true
    },
    verifiedId: {
        type: String,
        required: true
    },
    fingerprint_image: {
        type: String
    },
    
    fingerprint_encode: {
        type: String,
        
    },
    signature: {
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
    approved : {
        type: Boolean,
        default: false
    }
});

userSchma.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchma);