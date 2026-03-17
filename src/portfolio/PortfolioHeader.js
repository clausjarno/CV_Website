import React from 'react'
import '../css/portfolioHeader.css'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <div className='header-container'>
                <div className='logo'>
                    Jarno Claus
                </div>
                <nav className='nav-links'>
                    <Link to='/'>Projects</Link>
                    <Link to='/cv'>CV</Link>
                    <a href='https://github.com/clausjarno' target='_blank' rel='noopener noreferrer'>Github</a>
                    <a href="/Jarno Claus CV.pdf" download>Download CV</a>
                </nav>
            </div>
        </header>
    );
}