const request = require('request')
const express = require('express')
const path = require('path')
const hbs = require('hbs')


const app = express()
const port = process.env.PORT || 3000
const views_path = path.join(__dirname, "../views")
const public_path = path.join(__dirname, "../public")
app.set('views', views_path)
app.set("view engine", "hbs")
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(express.static(public_path))

app.get('/',(req, res)=>{
    res.render('index')
})

app.post('/home',(req, res)=>{
    let dataArray = []
    const location = req.body.cityName;
    const url = `http://api.weatherstack.com/current?access_key=5b8a3c041a96a0ee70ea4a9729fa883e&query=${location}`

    request({url: url},(error, response)=>{
    

        // storing whole json body into data variable
        const data = JSON.parse(response.body)
       // console.log(data)
        
        const address = {
            city : data.location.name,
            region : data.location.region,
            country : data.location.country
        }

        const weather = {
            temperature : data.current.temperature,
            wind_speed : data.current.wind_speed,
            wind_degree : data.current.wind_degree
        }
        dataArray.push(address)
        dataArray.push(weather)
        
        finalArray = JSON.stringify(dataArray)
        res.render('home',{info : finalArray})
        
})

    
})
app.listen(port,()=>{
    console.log(`server is running on port no ${port}`);
})