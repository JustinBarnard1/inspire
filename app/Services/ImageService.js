import { api } from "./AxiosService.js"
import { ProxyState } from "../AppState.js"
//TODO create methods to retrieve data and save to the State
class ImageService {
    constructor() {

    }

    async getImage() {
        let res = await api.get("images")
        ProxyState.bgImage = res.data.url
    }
}

const imageService = new ImageService();
export default imageService;