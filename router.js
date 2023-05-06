const express = require('express');
const router = express.Router();
const workshops = require('./workshops.json');

module.exports = router;

router.get('/', (request, response) => {
    response.render('index.ejs');
});

router.get('/workshops', (request, response) => {
    response.render('workshops.ejs', {workshops})
});

router.get('/teas', (request, response) => {
    response.render('teas.ejs')
});

