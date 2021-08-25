import {useState , useEffect} from "react";
import Fetchapi from "./Fetchapi.js";
import { NEWS_API_KEY } from "./config";

const url = `http://api.mediastack.com/v1/news?access_key=${NEWS_API_KEY}&countries=in&languages=en&categories=entertainment`;
function Entertainment(props){
    const[articles,setArticles] = useState([]);
    useEffect(()=>{
            async function getData(){
                try{
                    let response = await Fetchapi(url);
                    setArticles(response.data)
                }
                catch(e){
                    console.log(e);
                }
            
            }
            getData();

        },[]
    );
    return(
        <div>
            Entertainment
            {console.log(articles)}
        </div>
    )
}
export default Entertainment;