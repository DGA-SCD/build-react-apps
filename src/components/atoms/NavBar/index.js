import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const NavBar = ({ location }) => {
  return (
    <nav className='navbar navbar-expand-md navbar-dark fixed-top bg-dark'>
      <Link className='navbar-brand' to='/'>
        Keep It Later!
      </Link>
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
          <li className={`nav-item ${location.pathname === '/' && 'active'}`}>
            <Link className='nav-link' to='/'>
              Home <span className='sr-only'>(current)</span>
            </Link>
          </li>
          <li className={`nav-item ${location.pathname === '/categories' && 'active'}`}>
            <Link className='nav-link' to='/categories'>
              Categories
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export const NavBarEnhancer = withRouter(NavBar)
