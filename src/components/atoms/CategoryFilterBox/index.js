import React, { useContext } from 'react'
import { CategoriesContext } from '../../../contexts'

export const CategoryFilterBox = () => {
  const { categories } = useContext(CategoriesContext)
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
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  )
}
