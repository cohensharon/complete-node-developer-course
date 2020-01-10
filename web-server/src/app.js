const path = require('path');
const express = require('express')
const hbs = require('hbs');


const app = express()

// app.com
// /help
// /about

//define paths for express config
const staticPublicPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

//setup hbs engine and views location
app.set('views', viewsPath);
app.set('view engine', 'hbs');
hbs.registerPartials(partialsPath);

//set up static dir to serve
app.use(express.static(staticPublicPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Sharon',
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Sharon',
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        message: 'Help message',
        title: 'Help',
        name: 'Sharon',
    });
});

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Rain',
        location: 'Palo Alto',
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});
