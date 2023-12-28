const cityName = document.querySelector(".ss")

const displayCityName = document.querySelector(".kainda")
const displayTemp = document.querySelector(".degree")
const displayhumi = document.querySelector("#humi")
const displaywinds = document.querySelector("#winds")
const displaypressure = document.querySelector("#press")
const displaystatus = document.querySelector(".stats")
const displayicon = document.querySelector(".imgg img")
const API_Key = "e91ac49e67d4ba3c7b9795c9dadb81f2"

async function fetchWeather(){
    const city_name= cityName.value;
    try{
        const out = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_Key}&units=metric`)
        const dass = await out.json();
        console.log(dass);
        displayCityName.innerHTML = `${dass.name},${dass.sys.country}`;
        displayTemp.innerHTML = `${parseInt(dass.main.temp)}<span>°C</span>`;
        displayhumi.innerHTML = `${dass.main.humidity}%`;
        displaywinds.innerHTML = `${parseInt(dass.wind.speed)} Km/h`;
        displaypressure.innerHTML = `${dass.main.pressure} hpa`
        displaystatus.innerHTML = `${dass.weather[0].description}`;
        
             if (dass.weather[0].main == 'Clear'){ 
                displayicon.src= "images/clear.png";}

             else if (dass.weather[0].main ='Rain'){
                displayicon.src = "images/rain.png";}

             else if (dass.weather[0].main ='Snow'){
                displayicon.src = "images/snow.png";}

             else if (dass.weather[0].main = 'Clouds'){
                displayicon.src = "images/cloud.png";}

             else if (dass.weather[0].main ='Mist'){
                displayicon.src = "images/mist.png";}

             else if (dass.weather[0].main ='Haze'){
                displayicon.src = "images/haze.png";}
        

    }catch(error){
        console.log(error)
    }
}