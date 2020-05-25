import React, { useContext } from 'react'
import '../../../category.css'

import { CategoryContext } from '../../../contexts'
import { CategoryListPresentation } from '.' // or './index.js' or './index'

export const CategoryList = () => {
  const { categories } = useContext(CategoryContext)
  return <CategoryListPresentation categories={categories} />
}
