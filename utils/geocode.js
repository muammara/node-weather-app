const request = require('postman-request')
const geocode = (address, callback) => {
    const geoKey = 'pk.eyJ1IjoibXVhbW1hcmRldiIsImEiOiJja3Jkdmd0ZmgxbGg3MnBxdXRqcDJvdzY4In0.lOZvEBcI4q4MeYQy_d70Hw'
    const geoAPI = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'
    const geoOptions = 'limit=1'
    const geoUrl = geoAPI + encodeURIComponent(address) + '.json?access_token=' + geoKey + '&' + geoOptions
    const options = {
        url: geoUrl,
        json: true
    }
    request(options, (error, response) => {
        if (error) {
            callback('Unable to connect to the location service', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find location, try to find another place', undefined)
        } else {
            const geoLocation = {
                coordinate: response.body.features[0].center,
                place: response.body.features[0].place_name
            }
            callback(undefined, geoLocation)

        }
    })

}
module.exports = geocode