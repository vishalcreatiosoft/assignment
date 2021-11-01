'use strict'

const request = require('request')
const express = require('express')
const path = require('path')
const hbs = require('hbs')
const { resolve } = require('path')
const mongoose = require('mongoose')
const searchRoutes = require('../routes/search')



const app = express()
const port = process.env.PORT || 3000
const views_path = path.join(__dirname, "../views")
const public_path = path.join(__dirname, "../public")
app.set('views', views_path)
app.set("view engine", "hbs")
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(express.static(public_path))
app.use(searchRoutes)

mongoose.connect('mongodb://localhost:27017/weather')




app.listen(port,()=>{
    console.log(`server is running on port no ${port}`);
})