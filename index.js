// Dependecies required
const express = require('express');
const router = require('./router.js');
const app = express();

// Settings for EJS
const ejs = require('ejs');
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

// Setting up the server
app.use(router);

// Launching the server
const port = 3000;
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
})