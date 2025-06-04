const express = require ('express');
const Journal = require ('./journal');
const router = express.Router();

//Create a new entry
router.post('/journals', async(req,res) => {
    try{
        const entry = new Journal(req.body);
        await entry.save();
        res.status(201).send(entry);
    }catch(error){
        res.status(400).send(error);
    }
})

module.exports = router;