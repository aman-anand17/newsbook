import { useState, useEffect } from "react";
import { NEWS_API_KEY } from "./config";
import ArticleList from "./ArticleList.js";
import axios from "axios";

const url = `https://gnews.io/api/v4/top-headlines?lang=en&topic=health&token=${NEWS_API_KEY}`;

function Health(props) {
  const [Articles, setArticles] = useState([]);
  const getData = async () => {
    return axios
      .get(`${url}`)
      .then((response) => setArticles(response.data.articles));
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <ArticleList articles={Articles} />
    </div>
  );
}
export default Health;
