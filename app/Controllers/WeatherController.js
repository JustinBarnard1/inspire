import { ProxyState } from "../AppState.js";
import weatherService from "../Services/WeatherService.js";

//xxxxxxxx//NOTE The weather service and controller are mostly done,
//		you may wish to check out the model and include some additional data.

//xxxxxxx//TODO Complete rendering data to the screen
function drawWeather() {
  //console.log("THE WEATHER MAN SAYS:", ProxyState.weather);
  let res = ProxyState.weather
  //console.log(res)
  document.getElementById("weather-here").innerHTML = `<h5>${res.fahrenheit}</h5>
      <h5>${res.city}</h5>`
}
export default class WeatherController {
  constructor() {
    ProxyState.on("weather", drawWeather);
    this.getWeather()
  }

  toggleM() {
    let res = ProxyState.weather
    if (res.showF) {
      console.log("F")
      document.getElementById("weather-here").innerHTML = `<h5>${res.celsius}</h5>
      <h5>${res.city}</h5>`
      res.showF = false
    } else {
      console.log("C")
      document.getElementById("weather-here").innerHTML = `<h5>${res.fahrenheit}</h5>
      <h5>${res.city}</h5>`
      res.showF = true
    }

  }

  getWeather() {
    try {
      weatherService.getWeather()
    }
    catch (e) {
      console.error(e)
    }
  }
}
