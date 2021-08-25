import { useState, useEffect } from 'react';
import { NEWS_API_KEY } from './config';
import ArticleList from './ArticleList.js';
import axios from 'axios';

const url = `http://api.mediastack.com/v1/news?access_key=${NEWS_API_KEY}&countries=in&languages=en&categories=science`;
function Science(props){
    const [ articles, setArticles] = useState([]);
    const getData = async () => {
        return axios
          .get(`${url}`)
          .then((response) =>setArticles(response.data.data));
      };
    useEffect(() => {
		getData();
	},[]);
    
    return(
        <div>
            Science
            <ArticleList articles ={articles}/>
            {console.log(articles)}
        </div>
    )
}
export default Science;