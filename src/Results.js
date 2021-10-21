import { useState, useEffect } from "react";
import { NEWS_API_KEY } from "./config";
import ArticleList from "./ArticleList.js";
import "./SearchBar.css";
import axios from "axios";

function Business(props) {
  const [Articles, setArticles] = useState([]);
  const [query, setQuery] = useState([]);

  const search = async (e) => {
    return axios
      .get(`https://gnews.io/api/v4/search?q=${setQuery}&token=API-Token`)
      .then((response) => setArticles(response.data.articles));
  };
  useEffect(() => {
    search();
  }, []);

  return (
    <div className="search-bar">
      <form onSubmit={search}>
        <input
          autofocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search keywords .."
        />
        <button>Search</button>
      </form>
      <div className="search-results">
        <ArticleList articles={Articles} />
      </div>
    </div>
  );
}
export default Business;
