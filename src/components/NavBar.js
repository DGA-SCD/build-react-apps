import React from 'react'

export const NavBar = () => {
  // const username = window.sessionStorage.getItem('username')
  return (
    <nav role='navigation' className='navbar fixed-top navbar-dark bg-dark'>
      <a className='navbar-brand' href='.'>
        Timely
      </a>
      <div style={{ color: '#fff' }}>zkan</div>
    </nav>
  )
}
