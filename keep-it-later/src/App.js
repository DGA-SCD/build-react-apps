import React from 'react'
import './App.css'

function App() {
  return (
    <div>
      <nav className='navbar navbar-expand-md navbar-dark fixed-top bg-dark'>
        <a className='navbar-brand' href='index.html'>
          Keep It Later!
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
      <div className='container' role='main' style={{ marginTop: '100px' }}>
        <div className='row'>
          <div className='col-9'>
            <input
              type='text'
              placeholder='What URL do you wanna keep it for later?'
              className='form-control form-control-lg'
              name='url'
              value=''
            />
          </div>
          <div className='col form-group'>
            <select
              className='form-control form-control-lg custom-select'
              id='category'
              style={{ height: '45px' }}
            >
              <option value='Choose category' disabled=''>
                Choose category
              </option>
              <option value='1'>Knowledge</option>
              <option value='2'>Personal</option>
              <option value='3'>Lame Stuff</option>
            </select>
          </div>
          <div className='col'>
            <button type='button' className='btn btn-success btn-lg'>
              Add
            </button>
          </div>
        </div>
        <div className='row'>
          <div className='col-3'>
            <div className='list-group'>
              <button type='button' className='list-group-item'>
                Categories
              </button>
              <button type='button' className='list-group-item list-group-item-action'>
                Knowledge
              </button>
              <button type='button' className='list-group-item list-group-item-action'>
                Personal
              </button>
              <button type='button' className='list-group-item list-group-item-action'>
                Lame Stuff
              </button>
            </div>
          </div>
          <div className='col'>
            <div className='row m-2 py-2 border-bottom border-gray align-items-center d-flex justify-content-between'>
              <div className='col-10'>
                <a
                  href='https://github.com/django-dbbackup/django-dbbackup'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  https://github.com/django-dbbackup/django-dbbackup
                </a>
                <span className='ml-2 badge badge-info'></span>
              </div>
              <div className='col'>
                <button className='btn btn-danger'>Remove</button>
              </div>
            </div>
            <div className='row m-2 py-2 border-bottom border-gray align-items-center d-flex justify-content-between'>
              <div className='col-10'>
                <a
                  href='https://medium.com/@etherealm/named-export-vs-default-export-in-es6-affb483a0910'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  https://medium.com/@etherealm/named-export-vs-default-export-in-es6-affb483a0910
                </a>
                <span className='ml-2 badge badge-info'>Knowledge</span>
              </div>
              <div className='col'>
                <button className='btn btn-danger'>Remove</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
