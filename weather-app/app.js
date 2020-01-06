
const request = require('request')
const chalk = require('chalk')

const geocode = require('./Utils/geocode')
const weather = require('./Utils/weather')

const MAPBOX = {
    url     : 'https://api.mapbox.com/geocoding/v5/mapbox.places/', // + 'Los%20Angeles.json?
    token   : 'pk.eyJ1IjoiYW5kcmV3cm9iZXJ0cyIsImEiOiJjazR3dnl2OXIwYWxzM2VxNnF4OGhlOHhhIn0.k8XJJZfV5ksM7HqouUy9vw',
    options : 'limit=1'
}

const DARKSKY = {
    url     : 'https://api.darksky.net/forecast/',
    token   : '5a0964688f9ca47c37a589b49d0b2a98/', // 52.11285,-4.08039?'
    options : 'units=si'
}

const address = process.argv[2]

if (typeof address !== 'string') {
    return console.log('Location name has to be a string')
}

if (address === '') {
    return console.log('Please specify a location')
}

geocode(MAPBOX, address, (error, mapData) => {

    if (error) {
        return console.log('Error', error)
    }

    weather(DARKSKY, mapData, (error, {summary, temperature, precipitation}) => {

        if (error) {
            return console.log('Error', error)
        }

        console.log(chalk.green(mapData.placeName))

        console.log(
            summary + 'Temperature is ' + temperature + ' ' + 
                'degrees, and ' + precipitation + '% chance of rain')
    }) 
})

