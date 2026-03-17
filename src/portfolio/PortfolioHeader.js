import React from 'react'
import '../css/portfolioHeader.css'

export default function Header() {
    return (
        <header>
            <div className='header-container'>
                <div className='logo'>
                    Jarno Claus
                </div>
                <nav className='nav-links'>
                    <a href='/CV_Website/'>Projects</a>
                    <a href='/CV_Website/cv'>CV</a>
                    <a href='https://github.com/clausjarno'>Github</a>
                    <a href="/Jarno Claus CV.pdf" download>Download CV</a>
                </nav>
            </div>
        </header>
    );
}