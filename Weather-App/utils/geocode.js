const request = require('request')


//geocode: address string to latitude, longitude, location name
const geocode = (address, callback) => {
    const mapAccessToken = 'pk.eyJ1IjoiY29oZW5zaGFyb24iLCJhIjoiY2p4cnZzZG1sMDR0ajNtcGoxdDVnY2MzbSJ9.hPb24Gfk8H1aVluFBWzn3g' 
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + ' .json?access_token=' + mapAccessToken + '&limit=1';

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('unable to connect to location services', undefined)
        } else if (!response.body.features || !response.body.features[0]) {
            callback('Unable to find location. Try another search')
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode