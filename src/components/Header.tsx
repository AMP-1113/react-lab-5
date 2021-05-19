import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";


function Header() {

    return (
        <Router >
        <header className="Header">
            <h1>MAD LIBS</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/stories">See Your Saved Stories</Link>
                    </li>
                    <li>
                        <Link to="/create-story">Create a new story</Link>
                    </li>
                </ul>
            </nav>
        </header>
        </Router>
    )
}

export default Header;