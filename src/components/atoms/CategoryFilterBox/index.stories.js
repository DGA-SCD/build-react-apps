import React from 'react'

import { CategoryFilterBox } from '.'
import { CategoriesContextProvider } from '../../../contexts'

export default {
  title: 'CategoryFilterBox',
  component: CategoryFilterBox
}

export const CategoryFilter = () => (
  <CategoriesContextProvider>
    <CategoryFilterBox />
  </CategoriesContextProvider>
)
