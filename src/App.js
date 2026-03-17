import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './portfolio/Portfolio.js';
import CV from './cv/CV.js';
import ScrollToTop from './ScrollToTop.js'

export default function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cv" element={<CV />} />
            </Routes>
        </Router>
    );
}

// TODO: Add i18n (npm install react-i18next i18next) for globalization.