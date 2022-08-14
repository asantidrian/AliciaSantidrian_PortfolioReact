import React, { useState } from 'react';
import Header from './Header.js';
import About from './pages/About.js';
import Portfolio from './pages/Portfolio.js';
import Resume from './pages/Resume.js';
import Contact from './pages/Contact.js';
import Footer from './Footer.js';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') return <About />;
        if (currentPage === 'Portfolio') return <Portfolio />;
        if (currentPage === 'Contact') return <Contact />;
        return <Resume />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div className="container-fluid d-flex w-100 h-100 flex-column pageBackground">
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    );
}
