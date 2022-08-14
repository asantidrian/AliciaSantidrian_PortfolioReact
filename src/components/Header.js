import React from 'react';
import Navigation from './Navigation';


export default function Header(props) {
    return (

        <div className="container-fluid ">

            <div className=" row card-header header">

                <img className="rounded profilePhoto m-2" src="https://asantidrian.github.io/AliciaSantidrianProfesionalPorfolio/assets/images/Personal%20photo.jpg"
                    alt="profile"></img>
                <span className=" col navbar-text d-flex align-items-end">
                    <h1> Alicia Santidrian</h1>
                </span>
                <Navigation currentPage={props.currentPage} handlePageChange={props.handlePageChange} />
            </div >
        </div >


    )
};


