const router = require('express').Router();
const {Pokemon, Type} = require('../db');

router.get('/', async(req, res, next) => {
    res.send(await Pokemon.findAll());
});

module.exports = router;