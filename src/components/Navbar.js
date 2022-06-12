import "./Navbar.css";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar(){
    const [isNavExpanded, setNavExpanded] = useState(false)
    return (
        <div className="navbar">
            <nav>
                <div className="nav-menu container">
                    <button onClick={() => {setNavExpanded(!isNavExpanded)}} className="hamburger"><i class="bi bi-list"></i></button>
                    <li className="nav-title"><Link to="/">dreamy.</Link></li>            
                    <li className="nav-item"><Link to="/essays">Essays</Link></li>
                    <li className="nav-item"><a href="/">Research</a></li>
                </div>
            </nav>
            <div className={isNavExpanded ? "nav-menu-expand expand" : "nav-menu-expand"}>  
                    <li className="nav-item-expand"><Link to="/essays">Essays</Link></li>
                    <li className="nav-item-expand">Research</li>
            </div>
        </div>
    );
}

export default Navbar