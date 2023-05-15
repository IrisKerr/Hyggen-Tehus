const workshops = require('../../data/workshops.json');

const workshopController = {
    getWorkshopPage: (request, response) => {
        response.render('workshops.ejs', {workshops})
    },
    getWorkshopDescriptionPage:  (request, response) => {
        workshopDescription = request.params.workshopDesc;
    
        requestedWorkshop = workshops.find((workshop) => {
            if (workshop.name === workshopDescription) { return true; }
            else { return false; }
        });
    
         if (requestedWorkshop) {
            response.render('workshop-description.ejs', {workshops, workshopDescription})
         }
        }
}

module.exports = workshopController;