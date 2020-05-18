import React from 'react'

import { CategoryFilterBoxPresentation } from './presentation'

export default {
  title: 'CategoryFilterBoxPresentation',
  component: CategoryFilterBoxPresentation
}

const categories = [
  {
    id: 1,
    name: 'Knowledge'
  },
  {
    id: 2,
    name: 'Entertainment'
  }
]

export const CategoryFilter = () => <CategoryFilterBoxPresentation categories={categories} />
