const mainController = {
    getHomePage: (request, response) => {
        response.render('index.ejs');
    }
}

module.exports = mainController;