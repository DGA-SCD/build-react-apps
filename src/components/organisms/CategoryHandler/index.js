import React from 'react'

import { CategoryInput } from '../../atoms/CategoryInput'
import { CategoryAddButton } from '../../atoms/CategoryAddButton'
import { CategoryList } from '../../molecules/CategoryList'

export const CategoryHandler = () => {
  const categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5']

  return (
    <div class='container' role='main' style={{ marginTop: '100px' }}>
      <div class='row'>
        <div class='col-8'>
          <CategoryInput />
        </div>
        <div class='col'>
          <CategoryAddButton />
        </div>
      </div>
      <div class='row' style={{ marginTop: '20px' }}>
        <div class='col'>
          <CategoryList categories={categories} />
        </div>
      </div>
    </div>
  )
}
