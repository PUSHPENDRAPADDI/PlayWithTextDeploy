import React from 'react'
import { Link } from 'react-router-dom'
import { FaSun, FaMoon } from 'react-icons/fa';

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/regex" style={{ textDecoration: 'none', marginRight: '15px', color: props.mode === 'dark' ? 'white' : '#042743' }} className="nav-a active" aria-current="page">Regex</Link>
              </li>
              <li className="nav-item">
                <Link to="/fileManage" style={{ textDecoration: 'none', marginRight: '15px', color: props.mode === 'dark' ? 'white' : '#042743' }} className="nav-a active" aria-current="page">All Files</Link>
              </li>
              <li className="nav-item">
                <Link to="/imageToText" style={{ textDecoration: 'none', marginRight: '15px', color: props.mode === 'dark' ? 'white' : '#042743' }} className="nav-a active" aria-current="page">Text from image</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" style={{ textDecoration: 'none', marginRight: '15px', color: props.mode === 'dark' ? 'white' : '#042743' }} className="nav-a active" aria-current="page">About</Link>
              </li>
            </ul>
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                <span className={`icon ${props.mode === 'light' ? 'moon' : 'sun'}`}>
                  {props.mode === 'light' ? <FaMoon onClick={props.toggleMode} size='25' /> : <FaSun onClick={props.toggleMode} size='25' />}
                </span>
                {` Enable ${props.mode === 'light' ? 'dark' : 'light'} mode`}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}