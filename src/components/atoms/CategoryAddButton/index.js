import React from 'react'

export const CategoryAddButton = ({ onClick }) => {
  return (
    <button type='button' class='btn btn-success btn-lg' onClick={onClick}>
      Add
    </button>
  )
}
