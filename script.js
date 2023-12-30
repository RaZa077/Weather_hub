const cityName = document.querySelector(".search-box")

const displayerrorr = document.querySelector(".error")
const displayCityName = document.querySelector(".location")
const displayTemp = document.querySelector(".temperature")
const displayhumi = document.querySelector("#humi")
const displaywinds = document.querySelector("#winds")
const displaypressure = document.querySelector("#press")
const displaystatus = document.querySelector(".stats")
const displayicon = document.querySelector(".weather-details img")
const displaybgvid = document.querySelector("#background-video")
const API_Key = "e91ac49e67d4ba3c7b9795c9dadb81f2"

async function fetchWeathera(){
   try{
       const out = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=kakinada&appid=${API_Key}&units=metric`)
       const outtt = await out.json();
       console.log(outtt);
       displayCityName.innerHTML = `${outtt.name},${outtt.sys.country}`;
       displayTemp.innerHTML = `${parseInt(outtt.main.temp)}<span>°C</span>`;
       displayhumi.innerHTML = `${outtt.main.humidity}%`;
       displaywinds.innerHTML = `${parseInt(outtt.wind.speed)} Km/h`;
       displaypressure.innerHTML = `${outtt.main.pressure} hpa`
       displaystatus.innerHTML = `${outtt.weather[0].description}`; 
       displayicon.src = `https://openweathermap.org/img/wn/${dass.weather[0].icon}@2x.png`


   }
   catch(error){
       console.log(error)
   }
}
fetchWeathera()

async function fetchWeather(){
    const city_name= cityName.value;
    try{
        const out = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_Key}&units=metric`)
        const dass = await out.json();
        console.log(dass);
        
         displayCityName.innerHTML = `${dass.name},${dass.sys.country}`;
         displayTemp.innerHTML = `${parseInt(dass.main.temp)}<span>°C</span>`;
         displayhumi.innerHTML = `${dass.main.humidity}%`;
         displaywinds.innerHTML = `${parseInt(dass.wind.speed)} m/s`;
         displaypressure.innerHTML = `${dass.main.pressure} hpa`
         displaystatus.innerHTML = `${dass.weather[0].description}`;
         // displayicon.src = `https://openweathermap.org/img/wn/${dass.weather[0].icon}@2x.png`
         
               if (dass.weather[0].main === 'Clear'){ 
                  // displaybgvid.src= "images/clear.png";
                  displayicon.src = "images/clear.png";}

               else if (dass.weather[0].main ==='Rain'){
                  displayicon.src = "images/rain.png";
                  displaybgvid.src = "videos/rain.mp4";}

               else if (dass.weather[0].main ==='Snow'){
                  displayicon.src = "images/snow.png";
                  displaybgvid.src = "videos/snow.mp4";}

               else if (dass.weather[0].main === 'Clouds'){
                  displayicon.src = "images/clouds.png"
                  displaybgvid.src = "videos/day sky.mp4";}

               else if (dass.weather[0].main ==='Mist'){
                  displayicon.src = "images/mist.png"
                  displaybgvid.src = "images/mist.png";}

               else if (dass.weather[0].main ==='Haze'){
                  displaybgvid.src = "images/haze.png";}
               
               else if (dass.weather[0].main ==='Drizzle'){
                  displaybgvid.src = "images/drizzle.png";}
               
         

                
    }catch(error){
        console.log(error)
    }
}