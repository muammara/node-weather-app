const request = require('postman-request')
const forecast = (coordinates, callback) => {
    const forecastKey = '790b42624f4d2f74e2cdc5c3b73c205a'
    const forecastAPI = 'http://api.weatherstack.com/current?'
    const forecastOptions = coordinates
    const forecastUrl = forecastAPI + 'access_key=' + forecastKey + '&query=' + forecastOptions
    const options = {
        url: forecastUrl,
        json: true
    }
    request(options, (error, response) => {
        if (error) {
            callback('Unable to connect to the weather service', undefined)
        } else if (response.body.error) {
            callback('Unable to find coordinates, try  another coordinates', undefined)
        } else {
            const forecastData = {
                lat: response.body.location.lat,
                lon: response.body.location.lon,
                temp: response.body.current.temperature,
                feels: response.body.current.feelslike,
                Desc: response.body.current.weather_descriptions[0],
                humidity: response.body.current.humidity

            }
            callback(undefined, forecastData)

        }
    })

}
module.exports = forecast