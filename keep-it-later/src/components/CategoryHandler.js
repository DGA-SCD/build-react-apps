import React from 'react'

import { CategoryCreator } from './CategoryCreator'
import { CategoryList } from './CategoryList'

export const CategoryHandler = () => {
  return (
    <div class='container' role='main' style={{ marginTop: '100px' }}>
      <CategoryCreator />
      <CategoryList />
    </div>
  )
}
