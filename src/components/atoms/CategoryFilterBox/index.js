import React from 'react'

export const CategoryFilterBox = () => (
  <div className='col-3'>
    <div className='list-group'>
      <button type='button' className='list-group-item'>
        Categories
      </button>
      <button type='button' className='list-group-item list-group-item-action'>
        Study
      </button>
      <button type='button' className='list-group-item list-group-item-action'>
        Workout
      </button>
    </div>
  </div>
)
