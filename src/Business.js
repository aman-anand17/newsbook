import { useState, useEffect } from 'react';
import { NEWS_API_KEY } from './config';
import ArticleList from './ArticleList.js';
import axios from 'axios';

const url = `http://api.mediastack.com/v1/news?access_key=${NEWS_API_KEY}&countries=in&languages=en&categories=business`;
function Business(props) {
	const [ articles, setArticles] = useState([]);
    /*async function getData() {
        try {
            let response = await Fetchapi(url);
            setArticles(response.data);
            console.log('data', articles)
        } catch (e) {
            console.log(e);
        }
    }
	useEffect(() => {
		getData();
	},[]);*/
     const getData = async () => {
        return axios
          .get(`${url}`)
          .then((response) =>setArticles(response.data.data));
      };
      useEffect(() => {
		getData();
	},[]);
	return (
		<div className="business">
			<div className="articles-container">
				<h3>Business Articles</h3>
                <ArticleList articles ={articles}/>
				{/* {console.log(articles)}
{articles.map(e => (
    <p>{e.title}</p>
))} */}

			</div>
		</div>
	);
}
export default Business;
