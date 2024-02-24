import React from 'react'
import { Link } from 'react-router-dom'
import { FaSun, FaMoon } from 'react-icons/fa';

export default function Navbar(props) {
  const navDetail = [
    {
      id: 1,
      title: 'Text Play',
      path: '/textForm'
    },
    {
      id: 2,
      title: 'Regex',
      path: '/regex'
    },
    {
      id: 3,
      title: 'All Files',
      path: '/fileManage'
    },
    {
      id: 4,
      title: 'Text from image',
      path: '/imageToText'
    },
    {
      id: 5,
      title: 'Dictionary',
      path: '/dictionary'
    },
    {
      id: 6,
      title: 'About',
      path: '/about'
    },
  ]
  return (
    <>
      <nav className={`navbar navbar-expand-lg sticky-top navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {navDetail.map(item => (
                <li className="nav-item ">
                  <Link to={item.path} style={{ textDecoration: 'none', marginRight: '15px', color: props.mode === 'dark' ? 'white' : '#042743' }} className="nav-a active nav-effect" aria-current="page">{item.title}</Link>
                </li>
              ))}
            </ul>
            <div className={`form-check text-${props.mode === 'light' ? 'dark' : 'light'}`}>
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