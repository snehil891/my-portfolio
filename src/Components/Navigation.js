/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import PropTypes from 'prop-types'


export default function Navigation(props) {
    return (
        <header className="header">
            <a href="#" className="logo">Snehil</a>
            <div className="bx bx-menu" id='menu-icon'></div>
            <nav className="navbar">
                <a href="./Profile.js" className="active">Home</a>
                <a href="#">About</a>
                <a href="#">Education</a>
                <a href="#">Skills</a>
                <a href="#">Contact</a>
            </nav>
        </header>

    )
}

Navigation.propTypes = {
    title: PropTypes.string
}