import React, { useState } from 'react'
import styled from 'styled-components'

import { CategoryInput } from '../../atoms/CategoryInput'
import { CategoryAddButton } from '../../atoms/CategoryAddButton'
import { CategoryList } from '../../molecules/CategoryList'

const StyledCategoryList = styled(CategoryList)`
  padding: 0;
`

export const CategoryHandler = () => {
  const [category, setCategory] = useState([])

  const onCategoryChange = (event) => {
    setCategory(event.target.value)
  }

  const categories = ['Category 1', 'Category 2']

  return (
    <div class='container' role='main' style={{ marginTop: '100px' }}>
      <div class='row'>
        <div class='col-8'>
          <CategoryInput onChange={onCategoryChange} value={category} />
        </div>
        <div class='col'>
          <CategoryAddButton />
        </div>
      </div>
      <div class='row' style={{ marginTop: '20px' }}>
        <div class='col'>
          <StyledCategoryList categories={categories} />
        </div>
      </div>
    </div>
  )
}
