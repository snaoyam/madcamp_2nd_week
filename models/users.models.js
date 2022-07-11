const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const User = Schema({
    username:{
        type : String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },

    email:{
        type: String,
        required: true
    },

    projects:{
        type: Number,
        default: 0
    },

    views:{
        type: Number,
        default: 0
    },

    recommends:{
        type: Number,
        default: 0
    },
});

module.exports = mongoose.model("User", User);