import React from 'react'

export const CategorySelectBox = () => (
  <select
    className='form-control form-control-lg custom-select'
    id='category'
    style={{ height: '45px' }}
  >
    <option>Study</option>
    <option>Workout</option>
    <option>Housekeeping</option>
  </select>
)
