const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

if (!process.argv[2]) {
    return console.log('Location is required');
}


const location = process.argv[2];

geocode(location, (error, data) => {
   
    if (error) {
        
        return console.log('error: ', error);
    }

    forecast(data.latitude, data.longitude, (error, forecastData) => {

        if (error) {
            return console.log('Error: ', error);
        }
        
        console.log(data.location);
        console.log(forecastData);
    })

});



