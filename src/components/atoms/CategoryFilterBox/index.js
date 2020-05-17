import React, { useContext } from 'react'
import { connect } from 'react-redux'

import { CategoriesContext } from '../../../contexts'
import { fetchItems } from '../../../store/actions'

const CategoryFilterBox = (props) => {
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
            onClick={() => props.fetchItems(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  fetchItems
}

export const ConnectedCategoryFilterBox = connect(null, mapDispatchToProps)(CategoryFilterBox)
