import React from 'react'
import PropTypes from 'prop-types'

export default function Contact(props) {
    return (
        <section className='contact' id='contact'>
            <h3 className='heading'>Contact<span>Me!</span></h3>
            <form>
                <div className='input-box'>
                    <div className='input-field'>
                        <input type='text' placeholder='Full Name' required></input>
                    </div>
                    <div className='input-field'>
                        <input type='text' placeholder='Email Address' required></input>
                    </div>
                </div>
                <div className='input-box'>
                    <div className='input-field'>
                        <input type='tel' placeholder='Mobile Number' required></input>
                    </div>
                    <div className='input-field'>
                        <input type='tel' placeholder='Subject' required></input>
                    </div>
                </div>
                <div className='textarea'>
                    <textarea name='' id='' cols={20} rows={10} placeholder='Your Question' required></textarea>
                </div>
                <div className='btn-box'>
                    <button type='submit' className='btn'>Submit</button>
                </div>
            </form>
        </section>
    )
}

Contact.propTypes = {
    title: PropTypes.string
}