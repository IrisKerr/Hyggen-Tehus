const teas = require('../../data/teas.json');

const teaController = {
    getTeaPage: (request, response) => {
            response.render('teas.ejs', { teas })
    },
    getTeaItemPage: (request, response) => {
        teaDescription = request.params.teaDesc;
    
        requestedTea = teas.find((tea) => {
            if (tea.name === teaDescription) { return true; }
            else { return false; }
        });
    
         if (requestedTea) {
            response.render('tea-description.ejs', {teas, teaDescription})
         }
        
        }
}
module.exports = teaController;