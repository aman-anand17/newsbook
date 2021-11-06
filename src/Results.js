import { useState, useEffect } from "react";
import { NEWS_API_KEY } from "./config";
import ArticleList from "./ArticleList.js";
import "./SearchBar.css";
import axios from "axios";
import { NavLink } from "react-router-dom";

function Business(props) {
  const [Articles, setArticles] = useState([]);
  const [query, setQuery] = useState([]);
  

  const search = async (e) => {
    return axios
      .get(`https://gnews.io/api/v4/search?q=${query}&token=${NEWS_API_KEY}`)
      .then((response) => setArticles(response.data.articles));
  };
  useEffect(() => {
    search();
  }, []);

  return (
    <div className="search-bar">
      <form onSubmit={(e)=>{
        e.preventDefault();
        e.target.value="";
        }}>
        <input
          autofocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search keywords .."
        />
        <NavLink to={`/q=${query}`}><button>Search</button></NavLink>
      </form>
      <div className="search-results">
        <ArticleList articles={Articles} />
      </div>
    </div>
  );
}
export default Business;
