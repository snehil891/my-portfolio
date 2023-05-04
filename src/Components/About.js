import React from 'react'
import PropTypes from 'prop-types'
import myImage from './myImage.jpg'

export default function About(props) {
    return (
        <section className='aboutme' id='about'>
            <h2 className='heading'>About<span>Me</span></h2>
            <div className='about-img'>
                <img src={myImage} alt='profile'></img>
            </div>
            <div className='about-content'>
                <h5>Full stack developer</h5>
                <p>Aiming to obtain a successful career in the IT Industry and to fully utilize my skills for making a significant
                    contribution to the success of the organization that I will work in.</p>
            </div>
        </section>
    )
}

About.propTypes = {
    title: PropTypes.string
}