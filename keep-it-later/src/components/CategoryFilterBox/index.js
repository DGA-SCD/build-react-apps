import React from 'react'

export const CategoryFilterBox = () => {
  return (
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
  )
}
