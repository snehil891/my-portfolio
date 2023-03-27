/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import PropTypes from 'prop-types'


export default function Navigation(props) {
    return (
        <nav id="navbar-example2" className="navbar bg-body-tertiary px-3 mb-3">
            <a className="navbar-brand" href="#">{props.title}</a>
            <ul className="nav nav-pills">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">About me</a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#scrollspyHeading3">Technical Skills</a></li>
                        <li><a className="dropdown-item" href="#scrollspyHeading4">Education</a></li>
                        <li><a className="dropdown-item" href="#scrollspyHeading5">Hobbies</a></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#scrollspyHeading1">Resume</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#scrollspyHeading2">Contact</a>
                </li>
            </ul>
        </nav>
    )
}

Navigation.propTypes = {
    title: PropTypes.string
}