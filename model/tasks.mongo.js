const mongoose = require('mongoose');

const tasksSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        required: true,
        default: false,
    },
    upcoming: {
        type: Boolean,
        default: true,
    },
});

module.exports = mongoose.model('Task', tasksSchema);
