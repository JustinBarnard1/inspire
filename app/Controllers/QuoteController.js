import { ProxyState } from "../AppState.js"
import quoteService from "../Services/QuoteService.js"


function _drawQuote() {
    let res = ProxyState.quote
    document.getElementById("quote-here").innerHTML = `<h3 data-toggle="tooltip" data-placement="top" title="Author: ${res.author}">${res.body}
</h3>`
}

//xxxxxxxxx//TODO Create methods for constructor, and rendering the quote to the page
export default class QuoteController {
    constructor() {
        this.getQuote()
        ProxyState.on("quote", _drawQuote)
    }

    getQuote() {
        try {
            quoteService.getQuote()
        } catch (error) {
            console.error(error)
        }
    }
}