import { ProxyState } from "../AppState.js";
import weatherService from "../Services/WeatherService.js";

//NOTE The weather service and controller are mostly done,
//		you may wish to check out the model and include some additional data.

//TODO Complete rendering data to the screen
function drawWeather() {
  //console.log("THE WEATHER MAN SAYS:", ProxyState.weather);
  let res = ProxyState.weather
  console.log(res)
  document.getElementById("weather-here").innerHTML = `<h5>${res.fahrenheit}</h5>
      <h5>${res.city}</h5>`
}
export default class WeatherController {
  constructor() {
    ProxyState.on("weather", drawWeather);
    this.getWeather()
  }

  toggleM() {

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
