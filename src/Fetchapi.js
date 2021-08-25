import axios from "axios";
async function Fetchapi(url){
        let response = await axios.get(url)
        return response
}

export default Fetchapi;
