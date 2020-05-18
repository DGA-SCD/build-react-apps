import React, { useContext } from 'react'
import { connect } from 'react-redux'

import { CategoriesContext } from '../../../contexts'
import { fetchItems } from '../../../store/actions'
import { CategoryFilterBoxPresentation } from './presentation'

const CategoryFilterBox = (props) => {
  const { categories } = useContext(CategoriesContext)

  return <CategoryFilterBoxPresentation categories={categories} fetchItems={props.fetchItems} />
}

const mapDispatchToProps = {
  fetchItems
}

export const ConnectedCategoryFilterBox = connect(null, mapDispatchToProps)(CategoryFilterBox)
