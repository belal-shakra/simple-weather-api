async function getWeather(city, degree){

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${degree}&appid=79546db8e85f2665e82600c7bb28bac0`
  const response = await fetch(apiUrl)

  if(!response.ok){
    throw new Error("Could not fecth res")
  }

  const data = await response.json();


  render(data.name, data.main.humidity, data.main.temp, data.main.temp_max, data.main.temp_min, data.wind.speed)
}



function main(){

  const input = document.querySelector("#search-box")

  if(document.querySelector("#celsius").checked === true)
    var degree = document.querySelector("#celsius").value
  else if(document.querySelector("#fahrenheit").checked === true)
    var degree = document.querySelector("#fahrenheit").value

  getWeather(input.value, degree)


}


function render (name, hum, temp, maxTemp, minTemp, windSpeed){

  document.querySelector("#card").style.display = "block"
  document.querySelector("#cityName").innerHTML = name
  document.querySelector("#humidity").innerHTML = hum
  document.querySelector("#temp").innerHTML = temp
  document.querySelector("#maxTemp").innerHTML = maxTemp
  document.querySelector("#minTemp").innerHTML = minTemp
  document.querySelector("#windSpeed").innerHTML = windSpeed
}