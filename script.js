//api variables
let key = '3e5a8393bbc60dbf92000795a1ee1a0a'
let longitude = '-104.8262'; 
let latitude = '39.739878';
let api = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=daily&units=imperial&appid=${key}`
//https://api.openweathermap.org/data/2.5/weather?q=${input}&units=imperial&appid=${myKey}
//CITY api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

document.addEventListener('DOMContentLoaded', init)
    function init(){
    fetch(api)
        .then(res => res.json())
        .then(data => renderThis(data))
    }

    function renderThis(object){
      console.log(object)
  }

const formGrab = document.getElementById("base-essen")
const city = document.getElementById('cityInput')
const citySub =document.querySelector('#citySubmit')
citySub.addEventListener('click', (e)=> {
  e.preventDefault();
  grabWeather(city.value)
  formGrab.reset()
})
