import React from "react";
import Categorybar from './Categorybar';
import "./Navbar.css";

function Navbar(props){
    return(
        
        <div className="navbar">
            <div className="navbar-left">
                <p className="navbar-left-title">
                    NewsBook
                </p>

            </div>
            <div className="navbar-right">
                <Categorybar/>
            </div>
            
        </div>
    )
}
export default Navbar;