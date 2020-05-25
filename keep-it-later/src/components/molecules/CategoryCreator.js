import React from 'react'

import { CategoryInput } from '../atoms/CategoryInput'
import { CategoryAddButton } from '../atoms/CategoryAddButton'

export const CategoryCreator = ({ category, onCategoryTextChanged, onAddClicked }) => {
  return (
    <div class='row'>
      <div class='col-8'>
        <CategoryInput category={category} onCategoryTextChanged={onCategoryTextChanged} />
      </div>
      <div class='col'>
        <CategoryAddButton onAddClicked={onAddClicked} />
      </div>
    </div>
  )
}
