import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import { CategoryInput } from '../../atoms/CategoryInput'
import { CategoryAddButton } from '../../atoms/CategoryAddButton'
import { CategoryList } from '../../molecules/CategoryList'

const StyledCategoryList = styled(CategoryList)`
  padding: 0;
`

export const CategoryHandler = () => {
  const [category, setCategory] = useState('')
  const [categories, setCategories] = useState([])

  const onCategoryChange = (event) => {
    setCategory(event.target.value)
  }

  useEffect(() => {
    const getCategories = async () => {
      const response = await axios.get('http://localhost:8000/categories')
      const data = await response.data
      setCategories(data)
    }

    getCategories()
  }, [])

  return (
    <div className='container' role='main' style={{ marginTop: '100px' }}>
      <div className='row'>
        <div className='col-8'>
          <CategoryInput onChange={onCategoryChange} value={category} />
        </div>
        <div className='col'>
          <CategoryAddButton />
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
