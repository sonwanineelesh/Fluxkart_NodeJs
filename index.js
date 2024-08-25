
const express = require('express');
const mongoose = require('mongoose');
const fluxkartRoutes = require('./Fluxkart_node/Routes/FluxkartRoutes');  // Import your routes

const app = express();

app.use(express.json());

// Use the Fluxkart and ContactResponse routes
app.use('/api', fluxkartRoutes);

const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/fluxkartdb', {
}).then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(err => {
    console.error("Error connecting to MongoDB", err);
});
