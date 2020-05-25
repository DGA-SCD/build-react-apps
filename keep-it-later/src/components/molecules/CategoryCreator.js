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
