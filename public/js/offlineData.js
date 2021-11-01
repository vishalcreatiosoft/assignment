//console.log('Validation js working')

const data = document.querySelector('h3')
const dataArray = JSON.parse(data.textContent)



const searchCount = document.createElement('h2')
searchCount.textContent = `${dataArray[0].city} is searched ${dataArray.length} times`
document.querySelector('body').appendChild(searchCount)

let count = 1
dataArray.forEach((obj)=>{

    const newCount = document.createElement('h3')
    newCount.textContent = `${count++} time searched data`
    document.querySelector('body').appendChild(newCount)
    
    const newCity = document.createElement('p')
    newCity.textContent = `The city is ${obj.city}`
    document.querySelector('body').appendChild(newCity)

    const newregion = document.createElement('p')
    newregion.textContent = `The region is ${obj.region}`
    document.querySelector('body').appendChild(newregion)

    const newCountry = document.createElement('p')
    newCountry.textContent = `The country is ${obj.country}`
    document.querySelector('body').appendChild(newCountry)

    const newtemperature = document.createElement('p')
    newtemperature.textContent = `Temperature at this location is ${obj.temperature}`
    document.querySelector('body').appendChild(newtemperature)

    const newWindSpeed = document.createElement('p')
    newWindSpeed.textContent = `Wind Speed in ${obj.city} is ${obj.windSpeed}`
    document.querySelector('body').appendChild(newWindSpeed)

    const newWindDegree = document.createElement('p')
    newWindDegree.textContent = `Wind Degree is ${obj.windDegree}`
    document.querySelector('body').appendChild(newWindDegree)

})



data.remove()

//showing data in paragraph tag
// const newParagraph = document.createElement('p')
// newParagraph.textContent = data.textContent
// document.querySelector('body').appendChild(newParagraph)


// const city = dataArray[0].city
// const region = dataArray[0].region
// const country = dataArray[0].country
// const wind_degree =dataArray[1].wind_degree
// const wind_speed = dataArray[1].wind_speed
// const temperature = dataArray[1].temperature

// let newArray = []



// const newCity = document.createElement('h3')
// newCity.textContent = `The city is ${city}`
// document.querySelector('body').appendChild(newCity)

// const newregion = document.createElement('h3')
// newregion.textContent = `The region is ${region}`
// document.querySelector('body').appendChild(newregion)

// const newCountry = document.createElement('h3')
// newCountry.textContent = `The country is ${country}`
// document.querySelector('body').appendChild(newCountry)

// const newtemperature = document.createElement('h3')
// newtemperature.textContent = `Temperature at this location is ${temperature}`
// document.querySelector('body').appendChild(newtemperature)

// const newWindSpeed = document.createElement('h3')
// newWindSpeed.textContent = `Wind Speed in ${city} is ${wind_speed}`
// document.querySelector('body').appendChild(newWindSpeed)

// const newWindDegree = document.createElement('h3')
// newWindDegree.textContent = `Wind Degree is ${wind_degree}`
// document.querySelector('body').appendChild(newWindDegree)

// data.remove()
// newParagraph.remove()


//Accessing all the cities in Array

// dataArray.forEach(element => {
//     let newHeading = document.createElement('h3')
//     newHeading.textContent = element.city
//     document.querySelector('body').appendChild(newHeading)
// });
