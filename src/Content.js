import "./Content.css";
import {useEffect,useState} from 'react';
import axios from "axios";



function Content(props) {
    const[title,setTitle] = useState("");
    useEffect(()=>{
        async function hello () {
            const response = await axios.get("http://api.mediastack.com/v1/news?access_key=26c43a644897e596df126fa6cf3a2114&countries=in")
            console.log(response.data);
        }
        /*hello();*/
    })
    return(
        <div className="content">


        </div>
    )
    
}
export default Content;