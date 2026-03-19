import React from 'react'
import '../css/portfolioHeader.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import nl_flag from '../images/nl_flag.svg'
import en_flag from '../images/en_flag.svg'

export default function Header() {
    const { i18n } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();

    const switchLanguage = (lang) => {
        // Keep current path after /en/ or /nl/
        const parts = location.pathname.split("/").slice(2);
        const newPath = `/${lang}/${parts.join("/")}`;

        i18n.changeLanguage(lang);
        navigate(newPath);
    }

    return (
        <header>
            <div className='header-container'>
                <div className='logo'>
                    Jarno Claus
                </div>
                <nav className='nav-links'>
                    <Link to={`/${i18n.language}/`}>Projects</Link>
                    <Link to={`/${i18n.language}/cv`}>CV</Link>
                    <a href='https://github.com/clausjarno' target='_blank' rel='noopener noreferrer'>Github</a>
                    <a href={i18n.language === 'en' ? "/cv-en.pdf" : "/cv-nl.pdf"} download>Download CV</a>
                    <img
                        src={en_flag}
                        alt='English'
                        className={`lang-flag ${i18n.language === 'en' ? 'active' : ''}`}
                        onClick={() => switchLanguage('en')}
                    />
                    <img src={nl_flag}
                        alt='Nederlands'
                        className={`lang-flag ${i18n.language === 'nl' ? 'active' : ''}`}
                        onClick={() => switchLanguage('nl')}
                    />
                </nav>
            </div>
        </header>
    );
}