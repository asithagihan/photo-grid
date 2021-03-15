const mongoose = require('mongoose');

const gridSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    images : {
        type: [Number],
    },
    userId: {
        type: String,
        required: true
    },
});

const Grid = mongoose.model("Grid", gridSchema);
module.exports = Grid;