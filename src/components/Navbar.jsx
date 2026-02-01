 import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import logoimg from './../assets/chat-messages-front-side-white-background.jpg'


function Navbar(props) {
    return (
        <>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><img src={logoimg} alt="log" width="50px" height="50px" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span> 
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Blog">Blog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Service">Service</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Textform">Textform</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Testmonial">Testmonial</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Register">Register</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact">Contct</Link>
              </li>
              
            </ul>

            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
             <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">dark mode</label>
            </div>
            



          </div>
        </div>
      </nav>
        </>
        
    )
}

export default Navbar
