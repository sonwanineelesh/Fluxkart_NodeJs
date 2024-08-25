
const express = require('express');
const app = express();

app.use(express.json()); 

app.post('/fluxkart', (req, res) => {
    const fluxkartDto = {
        id: req.body.id,                   
        phoneNumber: req.body.phoneNumber, 
        email: req.body.email,         
        linkedId: req.body.linkedId,      
        linkPrecedence: req.body.linkPrecedence,
        createdAt: req.body.createdAt,     
        updatedAt: req.body.updatedAt,    
        deletedAt: req.body.deletedAt    
    };

    console.log(fluxkartDto);

    res.status(200).json({ message: "Data received successfully", data: fluxkartDto });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
