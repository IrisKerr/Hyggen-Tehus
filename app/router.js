const express = require('express');
const router = express.Router();

const mainController = require('./controllers/mainController.js');
const teaController = require('./controllers/teaController.js');
const workshopController = require('./controllers/workshopController.js');

router.get('/', mainController.getHomePage);

router.get('/workshops', workshopController.getWorkshopPage);

router.get('/workshops/:workshopDesc', workshopController.getWorkshopDescriptionPage);

router.get('/teas', teaController.getTeaPage);
router.get('/teas/:teaDesc', teaController.getTeaItemPage);

module.exports = router;