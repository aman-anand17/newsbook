import { useState, useEffect } from "react";
import { NEWS_API_KEY } from "./config";
import ArticleList from "./ArticleList.js";
import "./SearchBar.css";
import axios from "axios";
import { NavLink } from "react-router-dom";

function Business(props) {
  
  const [query, setQuery] = useState([]);
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
    </div>
  );
}
export default Business;
