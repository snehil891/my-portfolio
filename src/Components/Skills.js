import React from 'react'
import PropTypes from 'prop-types'

export default function Skills(props) {
    return (
        <section className='skills' id='skills'>
            <h5 className='heading'>My<span>Skills</span></h5>
            <div className='skills-row'>
                <div className='skills-column'>
                    <h3 className='title'>Technical skills</h3>
                    <div className='skills-box'>
                        <div className='skills-content'>
                            <div className='content'>
                                <h3>Programming Languages:</h3>
                                <p>C,Python,Java,JavaScript,ReactJS,XML</p>
                            </div>
                        </div>
                        <div className='skills-content'>
                            <div className='content'>
                                <h3>Databases:</h3>
                                <p> SQL, MongoDB, Firebase</p>
                            </div>
                        </div>
                        <div className='skills-content'>
                            <div className='content'>
                                <h3>Operating System:</h3>
                                <p>Windows and Linux</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

Skills.propTypes = {
    title: PropTypes.string
}