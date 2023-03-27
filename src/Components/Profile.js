/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import myImage from '../Components/myImage.jpg';


export default function Profile() {
    return (
        <div className="card">
            <center>
            <img className="card-img-top" src={myImage} alt="Card image cap" />
            <div className="card-body">
                <h3 className="card-title">Snehil Sah</h3>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Download Resume</a>
            </div>
            </center>
        </div>
    )
}
