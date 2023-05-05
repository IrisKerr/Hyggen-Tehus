const express = require('express');
const router = express.Router();

module.exports = router;

router.get('/', (request, response) => {
    response.render('index.ejs');
});

router.get('/workshops', (request, response) => {
    response.render('workshops.ejs')
})

router.get('/teas', (request, response) => {
    response.render('teas.ejs')
})