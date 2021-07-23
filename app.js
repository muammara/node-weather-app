const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const chalk = require('chalk')
const yargs = require('yargs')
address = process.argv[2]
if (!address) {
    return console.log('Please provide a location to get the weather information....')
}

geocode(address, (error, data) => {
    if (error) {
        return  console.log('Error: ', error)
    }

    forecast(data.coordinate.reverse(), (error, forecastData) => {
        if (error) {
            return onsole.log('Error: ', error)
        }
        message = 'Weather in ' + chalk.greenBright(data.place) + ' is ' + chalk.greenBright(forecastData.Desc) + ' and temperature is ' + chalk.greenBright(forecastData.temp) + ' but it feels like ' + chalk.greenBright(forecastData.feels) + ' and hunmidity is ' + chalk.greenBright(forecastData.humidity) + '%'
        console.log(message)
      
    })

})








