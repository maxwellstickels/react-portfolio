import React from 'react';
import '../App.css';
import Project from './Project';

function Header() {
    return (
        <header>
            <nav>
                <h1><span id="maxwell">MAXWELL</span> STICKELS</h1>
                <ul id="links">
                    <li>
                        <a href="#about-me" onClick={Project({selected: 1})}>About Me</a>
                    </li>
                    <li>
                        <a href="#works" onClick={Project({selected: 2})}>Published Works</a>
                    </li>
                    <li>
                        <a href="#contact" onClick={Project({selected: 3})}>Contact Info</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;