import React from "react";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";


function Header() {

    return (
        <header className="Header">
            <h1>MAD LIBS</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/stories">See Your Saved Stories</NavLink>
                    </li>
                    <li>
                        <NavLink to="/create-story">Create a new story</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;