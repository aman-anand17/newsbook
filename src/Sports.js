import { useState, useEffect } from "react";
import { NEWS_API_KEY } from "./config";
import ArticleList from "./ArticleList.js";
import axios from "axios";

const url = `https://gnews.io/api/v4/top-headlines?token=${NEWS_API_KEY}`;
function Sports(props) {
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
      Sports
      <ArticleList articles={Articles} />
    </div>
  );
}
export default Sports;
