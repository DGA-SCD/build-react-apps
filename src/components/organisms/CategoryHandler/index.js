import React, { useState, useContext } from 'react'
import styled from 'styled-components'

import { CategoryInput } from '../../atoms/CategoryInput'
import { CategoryAddButton } from '../../atoms/CategoryAddButton'
import { CategoryList } from '../../molecules/CategoryList'
import { CategoriesContext } from '../../../contexts'

const StyledCategoryList = styled(CategoryList)`
  padding: 0;
`

export const CategoryHandler = () => {
  const [category, setCategory] = useState('')

  const onCategoryChange = (event) => {
    setCategory(event.target.value)
  }

  const { categories, addNewCategory } = useContext(CategoriesContext)

  const onAddClicked = () => {
    addNewCategory({ name: category })
  }

  return (
    <div className='container' role='main' style={{ marginTop: '100px' }}>
      <div className='row'>
        <div className='col-8'>
          <CategoryInput onChange={onCategoryChange} value={category} />
        </div>
        <div className='col'>
          <CategoryAddButton onClick={onAddClicked} />
        </div>
      </div>
      <div className='row' style={{ marginTop: '20px' }}>
        <div className='col'>
          <StyledCategoryList categories={categories} />
        </div>
      </div>
    </div>
  )
}
