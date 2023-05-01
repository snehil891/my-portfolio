import React from 'react';
import PropTypes from 'prop-types';

export default function Profile(props){
    return(
        <section className="home" id="home">
            <div className="home-content">
                <h1>Hi I'm <span>Snehil Sah</span></h1>
                <div className="text">
                    <h3>Full stack web developer</h3>
                </div>
                <p>Aiming to obtain a successful career in the IT Industry and to fully utilize my skills for making a significant
                    contribution to the success of the organization that I will work in.</p>
                
                <div className="btn-box">
                    <a href="#resume" className="btn">Download Resume</a>
                </div>
            </div>
            <div className="home-social">
                <a href="#linkedin"><i className="bx bxl-linkedin"></i></a>
                <a href="#githublink"><i className="bx bxl-github" ></i></a>
            </div>  
        </section>
    )
}

Profile.propTypes = {
    title: PropTypes.string
}