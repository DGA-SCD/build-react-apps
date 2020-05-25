import React from 'react'

export const CategoryAddButton = ({ onAddClicked }) => {
  return (
    <button type='button' class='btn btn-success btn-lg' onClick={onAddClicked}>
      Add
    </button>
  )
}
