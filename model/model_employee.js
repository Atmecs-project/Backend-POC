const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const empSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    designation: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    mobile: {
        type: Number,
        required: true,
    },
    role: {
        type: Number,
        required: true,
    },
    userid: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        required: true,
        }
});

module.exports = mongoose.model("col_employees", empSchema);