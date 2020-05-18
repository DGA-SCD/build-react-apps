import React from 'react'

export const CategoryCreator = () => {
  return (
    <div class='row'>
      <div class='col-8'>
        <input
          type='text'
          placeholder='Plase enter a new category'
          class='form-control form-control-lg'
          name='task'
          value=''
        />
      </div>
      <div class='col'>
        <button type='button' class='btn btn-success btn-lg'>
          Add
        </button>
      </div>
    </div>
  )
}
