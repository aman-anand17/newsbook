import "./Navbar.css";
import {useState} from "react";
function Navbar(props){
    return(
        
        <div className="navbar">
            <div className="navbar-left">
                <p className="navbar-left-icon">
                <i className="fas fa-newspaper"></i>

                </p>
                <p className="navbar-left-title">
                    News Book

                </p>

            </div>
            <div className="navbar-right">
                <div className="navbar-right-search">

                    <p className="navbar-right-search-icon">
                        <i className="fas fa-search"></i>

                    </p>

                    <p className="navbar-right-search-textinput">
                    
	                    <input type="search" placeholder="Search..."/>


                    </p>
                    
                    

                </div>

            </div>
            
        </div>
    )
}
export default Navbar;