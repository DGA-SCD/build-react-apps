import React from 'react'

export const CategoryInput = ({ category, onCategoryTextChanged }) => {
  return (
    <input
      type='text'
      placeholder='Plase enter a new category'
      class='form-control form-control-lg'
      name='task'
      value={category}
      onChange={onCategoryTextChanged}
    />
  )
}
