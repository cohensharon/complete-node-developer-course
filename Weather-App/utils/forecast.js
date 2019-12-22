const request = require('request');

const forecast = (lat, long, callback) => {
    const URL = 'https://api.darksky.net/forecast/169a78a8e947b98c00bca3e1d6dc7de2/' + lat + ',' + long + '?units=si';

    request({ url: URL, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service', undefined);
        } else if (response.body.error) {
            callback('Unable to find location weather', undefined);
        } else {
            current_data = response.body.currently;
            message = response.body.daily.data[0].summary + ' It is currently ' + current_data.temperature + ' degrees out. There is a ' +
                + (current_data.precipProbability * 100) + ' % chance of ' + (current_data.precipType || 'rain') + '.'

            callback(undefined, message);
        }
    });
}

module.exports = forecast