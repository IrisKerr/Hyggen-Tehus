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

router.get('/workshops/:workshopDesc', (request, response) => {
    workshopDescription = request.params.workshopDesc;

    requestedWorkshop = workshops.find((workshop) => {
        if (workshop.name === workshopDescription) { return true; }
        else { return false; }
    });

     if (requestedWorkshop) {
        response.render(`workshop-description.ejs`, {workshops, workshopDescription})
     }
    
    });
    

router.get('/teas', (request, response) => {
    response.render('teas.ejs')
});

