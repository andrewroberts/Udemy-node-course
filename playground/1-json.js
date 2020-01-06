/* jshint esversion: 6 */

const fs = require('fs')

// const data = {
//     name: 'Andrew',
//     planet: 'Earth',
//     age: 27
// }

// fs.writeFileSync('1-json.json', JSON.stringify(data))

const dataJSON = fs.readFileSync('1-json.json')
const dataObject = JSON.parse(dataJSON)

dataObject.name = 'Andrew1'
dataObject.age = 50

fs.writeFileSync('1-json.json', JSON.stringify(dataObject))
