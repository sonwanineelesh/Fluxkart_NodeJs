
const express = require('express');
const mongoose = require('mongoose');
const fluxkartRoutes = require('./FluxkartRoutes');  // Import your routes

const app = express();

app.use(express.json());

// Use the Fluxkart and ContactResponse routes
app.use('/api', fluxkartRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
  })
const uri = "mongodb+srv://sonwanineelesh:F3kvsrSVs1mbfwvx@fluxkartdb.r6nob.mongodb.net/";

mongoose.connect(uri, {
  
}).then(() => {
  console.log("MongoDB connected successfully! at port",PORT);
}).catch((error) => { 
  console.error("MongoDB connection failed:", error);
});

