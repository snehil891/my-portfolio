import React from 'react'
import PropTypes from 'prop-types'

export default function Contact(props){
    return(
        <section className='contact' id='contact'>
            <h3 className='heading'>Contact<span>Me!</span></h3>
            
        </section>
    )
}

Contact.propTypes={
    title: PropTypes.string
}