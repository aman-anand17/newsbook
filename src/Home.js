import React from 'react';
import './Home.css';
import Navbar from "./Navbar.js";
import Time from "./Time.js";
import Content from "./Content";

function Home() {
    return (

        <div className = "home">

        <section id = "navbar">
            <Navbar/>
        </section>
       
        <section id = "content">
            <Content/>
        </section>

        </div>
    )
}

export default Home;
