import imageService from "../Services/ImageService.js"
import { ProxyState } from "../AppState.js"

function _drawImage() {
    let img = ProxyState.bgImage
    document.getElementById("bg-image").style.backgroundImage = `url(${img})`
}

setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let amPm = "AM";

    if (hour > 12) {
        hour -= 12;
        amPm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        amPm = "AM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime = hour + ":"
        + min + ":" + sec + amPm;

    document.getElementById("clock")
        .innerHTML = currentTime;
}

//xxxxxxxxxx//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image: https://www.w3schools.com/JSREF/prop_style_backgroundimage.asp)
export default class ImageController {
    constructor() {
        this.getImage()
        ProxyState.on("bgImage", _drawImage)
    }

    getImage() {
        try {
            imageService.getImage()
        } catch (error) {
            console.error(error)
        }
    }
}