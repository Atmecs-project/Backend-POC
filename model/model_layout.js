const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const layoutSchema = new Schema({       
    left_layout: {
        type: String,
        required: true,
    },    
    right_layout: {
        type: Boolean,
        required: true,
        }
});

module.exports = mongoose.model("col_layouts", layoutSchema);