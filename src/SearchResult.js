import { useState, useEffect } from "react";
import { NEWS_API_KEY } from "./config";
import ArticleList from "./ArticleList.js";
import "./SearchBar.css";
import axios from "axios";
import { NavLink } from "react-router-dom";

function SearchResult(props) {
  const [articles, setArticles] = useState([]);
  const search = async (e) => {
      console.log(props.query)
    return axios
      .get(`https://gnews.io/api/v4/search?q=${props.match.params.query}&token=${NEWS_API_KEY}`)
      .then((response) => setArticles(response.data.articles));
  };
  useEffect(() => {
    search();
  }, []);

  return (
    <div>
       <ArticleList articles={articles} />
   </div>
    
  );
}
export default SearchResult;
