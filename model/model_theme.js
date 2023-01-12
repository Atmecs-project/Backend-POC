const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const themeSchema = new Schema({
    main_theme: {
        type: String,
        required: true,
    },
    left_theme: {
        type: String,
        required: true,
    },
    right_theme: {
        type: String,
        required: true,
    },
    header_theme: {
        type: String,
        required: true,
    },
    footer_theme: {
        type: String,
        required: true,
    },    
    status: {
        type: Boolean,
        required: true,
        }
});

module.exports = mongoose.model("col_themes", themeSchema);