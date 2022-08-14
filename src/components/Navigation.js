import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Navigation({ currentPage, handlePageChange }) {


    return (
        <nav className="navbar navbar-expand-lg col mt-4 pt-4 ml-4 pl-4">
            <li className="nav-link m-4">
                <a
                    href="#About"
                    onClick={() => handlePageChange('About')}
                    // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                >
                    About me
                </a>
            </li>
            <li className="nav-link m-4">
                <a
                    href="#Portfolio"
                    onClick={() => handlePageChange('Portfolio')}
                    // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                    Portfolio
                </a>
            </li>
            <li className="nav-link m-4">
                <a
                    href="#Contact"
                    onClick={() => handlePageChange('Contact')}
                    // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                    Contact
                </a>
            </li>
            <li className="nav-link m-4">
                <a
                    href="#resume"
                    onClick={() => handlePageChange('Resume')}
                    // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                >
                    Resume
                </a>
            </li>

        </nav>
    );
}

export default Navigation;