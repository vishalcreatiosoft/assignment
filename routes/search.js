const express = require('express')
const router = new express.Router()
const request = require('request')
const fetch = require('cross-fetch')
const weatherController = require('../controllers/weather-control')



router.get('/',(req, res)=>{
    
    res.render('index')
    
})


const fetchData = async(city) => {
    let dataArray = []
    const url = `http://api.weatherstack.com/current?access_key=5b8a3c041a96a0ee70ea4a9729fa883e&query=${city}`

    const data = await fetch(url).then((response)=> response.json())

    const address = {
        city : data.location.name,
        region : data.location.region,
        country : data.location.country
    }

    const weather = {
        temperature : data.current.temperature,
        windSpeed : data.current.wind_speed,
        windDegree : data.current.wind_degree
    }
    
    dataArray.push(address)
    dataArray.push(weather)

    return dataArray

}


router.post('/home',async(req, res)=>{   

    const city = req.body.cityName
    const getData = await fetchData(city)

    weatherController.saveData(getData)
   
    let finalArray = JSON.stringify(getData)
    res.render('home',{info : finalArray})

})

router.post('/offlineHome',async(req, res) => {
    let dataArray = []
    const city = req.body.cityName
    const offlineData = await weatherController.fetchData(city)
    
    offlineData.forEach((element)=>{
        dataArray.push({
            city : element.city,
            region : element.region,
            country : element.country,
            temperature : element.temperature,
            windSpeed : element.windSpeed,
            windDegree : element.windDegree

        })
    })

    let finalArray = JSON.stringify(dataArray)
    res.render('offlineHome',{info : finalArray})




})


module.exports = router