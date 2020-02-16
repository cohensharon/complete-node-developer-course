const request = require('request')


//geocode: address string to latitude, longitude, location name
const geocode = (address, callback) => {
    const mapAccessToken = 'pk.eyJ1IjoiY29oZW5zaGFyb24iLCJhIjoiY2p4cnZzZG1sMDR0ajNtcGoxdDVnY2MzbSJ9.hPb24Gfk8H1aVluFBWzn3g' 
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + ' .json?access_token=' + mapAccessToken + '&limit=1';

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('unable to connect to location services', undefined)
        } else if (!body.features || !body.features[0]) {
            callback('Unable to find location. Try another search')
        } else {
            const feature = body.features[0];
            callback(undefined, {
                latitude: feature.center[1],
                longitude: feature.center[0],
                location: feature.place_name
            })
        }
    })
}

module.exports = geocode