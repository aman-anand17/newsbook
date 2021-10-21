import React from "react";
import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="search-bar">
      <form onSubmit>
        <input autofocus onChange placeholder="Search keywords .." />
        <button>Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
