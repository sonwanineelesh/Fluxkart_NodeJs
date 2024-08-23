const mongoose = require('mongoose');

// Define the schema for ContactResponse
const contactResponseSchema = new mongoose.Schema({
    primaryContactId: {
        type: Number,
        default: 0,
        required: true
    },
    email: {
        type: [String], // Array of strings
        required: true
    },
    phoneNumber: {
        type: [String], // Array of strings
        required: true
    },
    secondaryContactId: {
        type: [Number], // Array of integers
        required: true
    }
},{
    versionKey: false,  // This removes the __v field
    toJSON: {
        transform: function(doc, ret) {
            delete ret._id;  // This removes _id field from the response
        }}});

// Create a model using the schema
const ContactResponse = mongoose.model('ContactResponse', contactResponseSchema);

module.exports = ContactResponse;
