const path = require('path');
const express = require('express')
const hbs = require('hbs');


const app = express()


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
    if (!req.query.address) {
        return res.send({
            error: 'must provide address'
        });
    }

    res.send({
        forecast: 'Rain',
        location: req.query.address,
    });
});

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: "you must provide a search term"
        })
    }
    console.log(req.query.search);
    res.send({
        products: []
    })
});


// 404 Pages rendering
app.get('/help/*', (req, res) => {
    res.render('404page', {
        title: 'help 404',
        message: 'Help article not found',
        name: 'SharCo'
    });
})

app.get('*', (req, res) => {
    res.render('404page', {
        title: '404 Page',
        message: 'Page not found',
        name: 'SharCo'
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});
