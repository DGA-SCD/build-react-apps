import React, { useState } from 'react'

import { CategoryCreator } from '../molecules/CategoryCreator'
import { CategoryList } from '../molecules/CategoryList/container'
import { useCategories } from '../../hooks' // or ../hooks/index

export const CategoryHandler = () => {
  // state = {
  //   category: '',
  //   categories: [] // ['Personal', 'Lame stuff']
  // }
  const [category, setCategory] = useState('')
  const [categories, setCategories] = useCategories()

  const onCategoryTextChanged = (event) => {
    // this.setState({ category: event.target.value })
    setCategory(event.target.value)
  }

  const onAddClicked = () => {
    // const newCategories = [...this.state.categories, this.state.category]
    // this.setState({ categories: newCategories })
    const newCategories = [...categories, category]
    setCategories(newCategories)
  }

  return (
    <div class='container' role='main' style={{ marginTop: '100px' }}>
      <CategoryCreator
        category={category}
        onCategoryTextChanged={onCategoryTextChanged}
        onAddClicked={onAddClicked}
      />
      <CategoryList />
    </div>
  )
}
