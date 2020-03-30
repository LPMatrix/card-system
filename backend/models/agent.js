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
    image: {
        type: String
        // required: true
    }
});

agentSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Agent', agentSchema);