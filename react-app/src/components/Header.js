import React from 'react';
import '../App.css';

function Header() {
    return (
        <header>
            <nav>
                <h1><span id="maxwell">MAXWELL</span> STICKELS</h1>
                <ul id="links">
                    <li>
                        <a href="#about-me">About Me</a>
                    </li>
                    <li>
                        <a href="#works">Published Works</a>
                    </li>
                    <li>
                        <a href="#contact">Contact Info</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;