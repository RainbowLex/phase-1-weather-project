//api variables
let key = '3e5a8393bbc60dbf92000795a1ee1a0a'
let longitude = '-104.826152'; //document.querySelector('lon'); 
let latitude = '39.739878';
let api = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=daily&units=imperial&appid=${key}`

const lat = document.querySelector('#latInput')
const latSub =document.querySelector('#latSubmit')
latSub.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log(lat.value)
})

const lon = document.querySelector('#lonInput')
const lonSub = document.querySelector('#lonSubmit')
lonSub.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log(lon.value)
})

document.addEventListener('DOMContentLoaded', init)
    function init(){
    fetch(api)
        .then(res => res.json())
        .then(data => renderThisShit(data))
    }

function renderThisShit(object){
    console.log(object)
    const current = object.current;
    console.log(current)
    console.log(current.temp)
}





// const theList = document.querySelector("#comments-list");
// theList.innerHTML = " ";
// const textSpace = document.querySelector("#comment");
// const commentList = document.querySelector("#comment-form");
// commentList.addEventListener('submit', function(event) {
//   event.preventDefault();
//   let post = document.createElement("li");
//   post.innerText = textSpace.value;
//   theList.append(post);
//   commentList.reset();
// });