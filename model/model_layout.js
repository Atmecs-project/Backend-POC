const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const layoutSchema = new Schema({       
    layout_name: {
        type: String,
        required: true,
    },    
    status: {
        type: Boolean,
        required: true,
        }
});

module.exports = mongoose.model("col_layouts", layoutSchema);