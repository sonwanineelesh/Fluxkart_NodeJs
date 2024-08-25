const express = require('express');
const router = express.Router();
const fluxkartServiceImpl = require('./FluxkartServiceImpl')


// Route to identify contact
router.post('/identify', async (req, res) => {
    try {
        const dto = req.body;
        const result = await fluxkartServiceImpl.identify(dto);
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


module.exports = router;

