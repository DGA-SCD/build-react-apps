import React from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'

const MenuLink = (props) => (
  <li className={`nav-item ${props.location.pathname === props.path && 'active'}`}>
    <Link className='nav-link' to={props.path}>
      {props.name}
    </Link>
  </li>
)

const HomeMenuLink = (props) => <MenuLink location={props.location} path='/' name='Home' />

const CategoryMenuLink = (props) => (
  <MenuLink location={props.location} path='/categories' name='Categories' />
)

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
          <HomeMenuLink location={location} />
          <CategoryMenuLink location={location} />
        </ul>
      </div>
    </nav>
  )
}

export const NavBarEnhancer = withRouter(NavBar)

NavBar.propTypes = {
  location: PropTypes.object
}
