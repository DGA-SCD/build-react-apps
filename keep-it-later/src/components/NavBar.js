import React from 'react'
import PropTypes from 'prop-types'

export const NavBar = ({ appName }) => {
  return (
    <nav className='navbar navbar-expand-md navbar-dark fixed-top bg-dark'>
      <a className='navbar-brand' href='index.html'>
        {appName}
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarCollapse'
        aria-controls='navbarCollapse'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarCollapse'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item active'>
            <a className='nav-link' href='index.html'>
              Home
            </a>
          </li>
          <li className='nav-item false'>
            <a className='nav-link' href='categories.html'>
              Categories
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

NavBar.propTypes = {
  appName: PropTypes.string
}
