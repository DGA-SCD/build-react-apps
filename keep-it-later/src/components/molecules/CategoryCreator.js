import React from 'react'

import { CategoryInput } from '../atoms/CategoryInput'

export const CategoryCreator = ({ category, onCategoryTextChanged, onAddClicked }) => {
  return (
    <div class='row'>
      <div class='col-8'>
        <CategoryInput category={category} onCategoryTextChanged={onCategoryTextChanged} />
      </div>
      <div class='col'>
        <button type='button' class='btn btn-success btn-lg' onClick={onAddClicked}>
          Add
        </button>
      </div>
    </div>
  )
}
