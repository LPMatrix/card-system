const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require("mongoose-unique-validator")
const agentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    },
    password: {
        type: String,
        required: true
    },
    resetToken: String,
    resetTokenExpiration: Date,
    image: {
        type: String,
        required: true
    },
    is_active : {
        type: Boolean,
        default : true
    }
});

agentSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Agent', agentSchema);