const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const layoutSchema = new Schema({       
    
     left_layout: {
        type: Boolean,
        required:true,
    },    
     right_layout: {
        type: Boolean,
        required:true,
    },
    show_logo: {
        type: Boolean,
        required:true,
    },
    show_leftmenu: {
        type: Boolean,
        required:true,
    },
    font_family: {
        type: String,
        required:true,
    }
});

module.exports = mongoose.model("col_layouts", layoutSchema);