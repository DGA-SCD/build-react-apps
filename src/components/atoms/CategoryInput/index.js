import React from 'react'

export const CategoryInput = ({ value, onChange }) => (
  <input
    type='text'
    placeholder='Plase enter a new category'
    className='form-control form-control-lg'
    name='task'
    value={value}
    onChange={onChange}
  />
)
