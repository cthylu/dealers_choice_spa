const router = require('express').Router();
const {Pokemon, Type} = require('../db');
const path = require('path');

router.get('/', async(req, res, next) => {
    try {
        res.send(await Pokemon.findAll());
    } catch(err) {
        next(err)
    }
    
});

router.get('/pokemon', async(req, res, next) => {
    try {
        res.sendFile(path.join(__dirname, 'index.html'));
    } catch(err) {
        next(err)
    }
});

module.exports = router;