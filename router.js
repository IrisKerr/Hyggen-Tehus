const express = require('express');
const router = express.Router();
const workshops = require('./workshops.json');
const teas = require('./teas.json');

module.exports = router;

router.get('/', (request, response) => {
    response.render('index.ejs');
});

router.get('/workshops', (request, response) => {
    response.render('workshops.ejs', {workshops})
});

router.get('/workshops/:workshopDesc', (request, response) => {
    workshopDescription = request.params.workshopDesc;

    requestedWorkshop = workshops.find((workshop) => {
        if (workshop.name === workshopDescription) { return true; }
        else { return false; }
    });

     if (requestedWorkshop) {
        response.render('workshop-description.ejs', {workshops, workshopDescription})
     }
    
    });
    

router.get('/teas', (request, response) => {
    response.render('teas.ejs', {teas })
});

router.get('/teas/:teaDesc', (request, response) => {
    teaDescription = request.params.teaDesc;

    requestedTea = teas.find((tea) => {
        if (tea.name === teaDescription) { return true; }
        else { return false; }
    });

     if (requestedTea) {
        response.render('tea-description.ejs', {teas, teaDescription})
     }
    
    });