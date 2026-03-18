import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './portfolio/Portfolio.js';
import CV from './cv/CV.js';
import ScrollToTop from './ScrollToTop.js'
import LanguageSync from './LanguageSync.js';
import './i18n.js';

export default function App() {
    return (
        <Router>
            {/* Makes sure the new page always start at the top */}
            <ScrollToTop />

            {/* Sync language on route change */}
            <LanguageSync />
            <Routes>

                {/* Redirect root to default language */}
                <Route path='/' element={<Navigate to='/nl/' replace />} />

                {/* English routes */}
                <Route path='/en/'>
                    <Route index element={<Home />} />
                    <Route path='cv' element={<CV />} />
                </Route>

                {/* Dutch routes */}
                <Route path='/nl/'>
                    <Route index element={<Home />} />
                    <Route path='cv' element={<CV />} />
                </Route>

                {/* Catch all */}
                <Route path='*' element={<Navigate to="/nl/" replace />} />
            </Routes>
        </Router>
    );
}