import React from 'react'

export const CategoryFilterBoxPresentation = ({ categories, fetchItems }) => {
  return (
    <div className='col-3'>
      <div className='list-group'>
        <button type='button' className='list-group-item'>
          Categories
        </button>
        {categories.map((category) => (
          <button
            type='button'
            className='list-group-item list-group-item-action'
            key={category.id}
            onClick={() => fetchItems(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  )
}
