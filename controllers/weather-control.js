const Weather = require('../models/weather-model')

const weatherData = {}

weatherData.saveData = async(getData) => {
    try{
        const weather = new Weather({
            city : getData[0].city,
            region : getData[0].region,
            country : getData[0].country,
            temperature : getData[1].temperature,
            windSpeed : getData[1].windSpeed,
            windDegree : getData[1].windDegree
        })

        const saveNewData = await weather.save()
        

    }catch(e){
        console.log('Error while saving data')
    }
}

weatherData.fetchData = async(city) => {
    try{
        
        const offlineData = await Weather.find({city : city})
        return offlineData
        //console.log(offlineData)

    }catch(e){
        console.log('Unable to fetch data from database')
    }
}


module.exports = weatherData