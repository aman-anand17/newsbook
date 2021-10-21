import React from "react";
import "./Home.css";
import Navbar from "./Navbar.js";
import Time from "./Time.js";
import Content from "./Content";
import SearchBar from "./SearchBar";
import Footer from "./Footer";
import Results from "./Results";

function Home() {
  return (
    <div className="home">
      <section id="navbar">
        <Navbar />
      </section>

      <section id="search-bar">
        <Results />
      </section>

      <section id="content">
        <Content />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}

export default Home;
