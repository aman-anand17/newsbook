import React from 'react';
import Categorybar from './Categorybar';
import './Mobile.css';

function Mobile({isOpen, setIsOpen}) {
    return (
        <div className = "mobile">
                <div className = "close-icon" onClick = {() => setIsOpen(!isOpen)} >
                     <i class="far fa-times-circle"></i>
                </div>

                <div className = "mobile-categorybar">
                    <div className = "category-container" onClick = {() => setIsOpen(!isOpen)}><Categorybar/> </div>
                </div>
            
        </div>
    )
}

export default Mobile;
