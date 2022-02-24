const express = require('express');
const router = express.Router();
const {Pokemon, Type} = require('../db');
const path = require('path');

router.use('/pokemon', express.static(path.join(__dirname, '../src')));
//console.log(path.join(__dirname, '../src'))


router.get('/', async(req, res, next) => {
    try {
        res.sendFile(path.join(__dirname, '../index.html'));
    } catch(err) {
        next(err)
    }
});

router.get('/pokemon', async(req, res, next) => {
    try {
        res.send(await Pokemon.findAll());
    } catch(err) {
        next(err)
    }
});

router.get('/pokemon/:id', async(req, res, next) => {
    try {
        res.send(await Pokemon.findAll({
            where: {
                id: req.params.id
            }
        }))
    } catch(err) {
        next(err)
    }
});

module.exports = router;