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

function displayData(object){ 
  let temp = `${object.main.temp}°`
  grabPs.innerText = object.name + ": " + object.weather[0].main + " " + temp   
}
const grabPs = document.getElementById('ps')

function grabWeather(city){
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${key}`)
    .then(res => res.json())
    .then(data => displayData(data))
}

const theList = document.querySelector("#comments-list");
theList.innerHTML = " ";
const textSpace = document.querySelector("#comment");
const commentList = document.querySelector("#comment-form");
commentList.addEventListener("submit", function (event) {
  event.preventDefault();
  let post = document.createElement("li");
  post.innerText = textSpace.value;
  post.style.listStyleType = 'none';
  theList.append(post);
  post.addEventListener('click', () => post.remove())
  commentList.reset();
});