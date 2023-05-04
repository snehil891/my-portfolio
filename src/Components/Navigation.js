/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import PropTypes from 'prop-types'
import Scroll from './Scroll'
Scroll();
export default function Navigation(props) {
    return (
        <>
        <header className="header">
            <a href="#home" className="logo">Snehil</a>
            <div className="bx bx-menu" id='menu-icon'></div>
            <nav className="navbar">
                <a href="#home" className="active">Home</a>
                <a href="#about">About</a>
                <a href="#education">Education</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contact</a>
            </nav>
            
        </header>
        </>
    )
}

Navigation.propTypes = {
    title: PropTypes.string
}