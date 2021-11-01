const mongoose = require('mongoose')

const weatherSchema = new mongoose.Schema({
    city : String,
    region : String,
    country : String,
    temperature : Number,
    windSpeed : Number,
    windDegree : Number
})

module.exports = mongoose.model('weather',weatherSchema)