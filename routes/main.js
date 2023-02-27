const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('<h1 style="color: green; text-align: center">Express App<h1>');
});

module.exports = router;
