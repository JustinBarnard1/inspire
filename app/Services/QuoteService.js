import { api } from "./AxiosService.js"
import { ProxyState } from "../AppState.js"

//xxxxxxxxx//TODO create methods to retrieve data and update the State
class QuoteService {
    constructor() {

    }

    async getQuote() {
        let res = await api.get("quotes")
        ProxyState.quote = res.data.quote.body
    }
}

const quoteService = new QuoteService();
export default quoteService;