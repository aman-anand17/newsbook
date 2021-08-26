import { useState, useEffect } from "react";
import { NEWS_API_KEY } from "./config";
import ArticleList from "./ArticleList.js";
import axios from "axios";

const url = `https://gnews.io/api/v4/top-headlines?topic=business&lang=en&token=${NEWS_API_KEY}`;
function Business(props) {
  const [Articles, setArticles] = useState([]);
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
      .then((response) => setArticles(response.data.articles));
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="business">
      <div className="articles-container">
        <ArticleList articles={Articles} />

        {/* {console.log(articles)}
{articles.map(e => (
    <p>{e.title}</p>
))} */}
      </div>
    </div>
  );
}
export default Business;
