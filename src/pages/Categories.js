import React from 'react'

import { NavBar } from '../components/NavBar'

export const Categories = () => {
  return (
    <div>
      <NavBar />
      <div class='container' role='main' style={{ marginTop: '100px' }}>
        <div class='row'>
          <div class='col-8'>
            <input
              type='text'
              placeholder='Plase enter a new category'
              class='form-control form-control-lg'
              name='task'
              value=''
            />
          </div>
          <div class='col'>
            <button type='button' class='btn btn-success btn-lg'>
              Add
            </button>
          </div>
        </div>
        <div class='row' style={{ marginTop: '20px' }}>
          <div class='col'>
            <ul>
              <li>Category 1</li>
              <li>Category 2</li>
              <li>Category 3</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
