import React, { useContext } from 'react'
import { connect } from 'react-redux'

import { storeCategoryId } from '../../../store/actions'
import { CategoriesContext } from '../../../contexts'

const CategorySelectBox = (props) => {
  const { categories } = useContext(CategoriesContext)

  return (
    <select
      className='form-control form-control-lg custom-select'
      id='category'
      style={{ height: '45px' }}
      onChange={(e) => props.storeCategoryId(e.target.value)}
    >
      {categories.map((category) => (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      ))}
    </select>
  )
}

const mapDispatchToProps = {
  storeCategoryId
}

export const ConnectedCategorySelectBox = connect(null, mapDispatchToProps)(CategorySelectBox)
