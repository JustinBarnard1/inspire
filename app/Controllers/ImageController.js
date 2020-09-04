import ImageService from "../Services/ImageService.js"

function _drawImage() {
    let img = ProxyState.Image
    document.getElementById("bg-image").style.backgroundImage = `url(${img})`
}
//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image: https://www.w3schools.com/JSREF/prop_style_backgroundimage.asp)
export default class ImageController {
    constructor() {
        this.getImage()
        ProxyState.on("bgImage", _drawImage)
    }
}