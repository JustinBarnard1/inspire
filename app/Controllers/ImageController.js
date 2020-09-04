import imageService from "../Services/ImageService.js"
import { ProxyState } from "../AppState.js"

function _drawImage() {
    let img = ProxyState.bgImage
    document.getElementById("bg-image").style.backgroundImage = `url(${img})`
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