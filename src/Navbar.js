import React, {useState} from "react";
import Categorybar from './Categorybar';
import Mobile from './Mobile';
import "./Navbar.css";

function Navbar(props){
    const [isOpen, setIsOpen] = useState(false);

    return(
        
        <div className="navbar">
            <div className="navbar-left">
                <p className="navbar-left-title">
                    NewsBook
                </p>

            </div>

            <div className = "categorybar-section">
            <div className="navbar-right">
                <Categorybar/>
            </div>

            <div className = "navbar-right-mobile">
                <div onClick = {() => setIsOpen(!isOpen)}>
                    <i class="fas fa-bars categorybar-icon"></i>              
                </div>

                <div>
                {
                        isOpen && <Mobile
                             isOpen = {isOpen}
                            setIsOpen = {setIsOpen}
                        
                       />
                }
                </div>
            </div>
            </div>
            
        </div>
    )
}
export default Navbar;