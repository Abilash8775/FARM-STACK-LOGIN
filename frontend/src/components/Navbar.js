import React from 'react';
import {Link} from "react-router-dom";
function Navbar(props) {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/Home" className="navbar-brand">NAVBAR</Link>
                <div className="ml-auto">
                    <ul className="navbar-nav">
                        <li><Link to="/Home" className="nav-link">HOME</Link></li>
                        <li><Link to="/Services" className="nav-link">SERVICES</Link></li>
                        <li><Link to="/Signup" className="nav-link">SIGNUP</Link></li>
                        <li><Link to="/Login" className="nav-link">LOGIN</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;