export default class Weather {

  constructor(data) {

    //console.log('[RAW WEATHER API DATA]', data);
    //xxxxxxxx//NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin


    //xxxxxxxxx//TODO You should convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    this.city = data.name
    this.kelvin = data.main.temp
    this.fahrenheit = Math.floor((data.main.temp - 273.15) * (9 / 5) + 32) + " " + "F"
    this.celsius = Math.floor(data.main.temp - 273.15) + " " + "C"
    //console.log(this.celsius)

    this.showF = true

  }
}



