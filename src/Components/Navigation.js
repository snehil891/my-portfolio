/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
export default function Navigation(props) {
  const [toggle, settoggle] = useState(false);

  useEffect((toggle) => {
    settoggle(!toggle);
  }, []);
  return (
    <div>
      <div className={toggle ? "header expanded" : "header"}>
        <a href="#home" className="logo">
          Snehil
        </a>
        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="toggle" onClick={useEffect(toggle)}>
          ==
        </div>
      </div>
    </div>
  );
}

Navigation.propTypes = {
  title: PropTypes.string,
};
