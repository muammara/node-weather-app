const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
//Configuration for paths for express
const publicPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/view')
const partialPath = path.join(__dirname, '../templates/partials')

//configuration handlebars engine
app.set('view engine', 'hbs')
app.set('view', viewPath)
hbs.registerPartials(partialPath)

//setup static directory to use
app.use(express.static(publicPath))




app.get('/weather', (req, res) => {
    data = {
        temp: 57,
        Desc: 'Partly cloudy'
    }
    res.send(data)
})


app.listen(3000, () => {
    console.log('Server is up at port 3000')
})