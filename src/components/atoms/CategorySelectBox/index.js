import React, { useContext } from 'react'
import { connect } from 'react-redux'

import { storeCategoryId } from '../../../store/actions'
import { CategoriesContext } from '../../../contexts'

const CategorySelectBox = () => {
  const { categories } = useContext(CategoriesContext)

  return (
    <select
      className='form-control form-control-lg custom-select'
      id='category'
      style={{ height: '45px' }}
      onChange={(e) => this.props.storeCategoryId(e.target.value)}
    >
      {categories.map((category) => (
        <option key={category.id} value={category.name}>
          {category.name}
        </option>
      ))}
    </select>
  )
}

const mapStateToProps = (state) => ({
  categoryId: state.categoryId
})

const mapDispatchToProps = {
  storeCategoryId
}

export const ConnectedCategorySelectBox = connect(
  mapStateToProps,
  mapDispatchToProps
)(CategorySelectBox)
