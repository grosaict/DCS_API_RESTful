const   mongoose    = require('mongoose');
var     Schema      = mongoose.Schema;

const CustomerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now,
        required: true
    },
});

CustomerSchema.index({'$**': 'text'});

module.exports = mongoose.model('Customer', CustomerSchema)