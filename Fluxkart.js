
const mongoose = require('mongoose');

const fluxkartSchema = new mongoose.Schema({
    id:
    {
        type: Number,
        
    },
    email: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    linkedId: {
        type: Number,
        default: null
    },
    linkPrecedence: {
        type: String,
        default: null
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    deletedAt: {
        type: Date,
        default: null
    }
},{
    versionKey: false,  
    toJSON: {
        transform: function(doc, ret) {
            delete ret._id;  
        }}});

const Fluxkart = mongoose.model('Fluxkart', fluxkartSchema);

module.exports = Fluxkart;
