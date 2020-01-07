const request = require('request');

const forecast = (lat, long, callback) => {
    const url = 'https://api.darksky.net/forecast/169a78a8e947b98c00bca3e1d6dc7de2/' + lat + ',' + long + '?units=si';

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service', undefined);
        } else if (body.error) {
            callback('Unable to find location weather', undefined);
        } else {
            const { precipProbability, temperature, precipType } = body.currently;
            message = body.daily.data[0].summary + ' It is currently ' + temperature + ' degrees out. There is a ' +
                + (precipProbability * 100) + ' % chance of ' + (precipType || 'rain') + '.'

            callback(undefined, message);
        }
    });
}

module.exports = forecast