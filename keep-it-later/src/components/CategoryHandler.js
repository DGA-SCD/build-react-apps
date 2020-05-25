import React, { useState } from 'react'

import { CategoryCreator } from './CategoryCreator'
import { CategoryList } from './CategoryList'

export const CategoryHandler = () => {
  // state = {
  //   category: '',
  //   categories: []
  // }
  const [category, setCategory] = useState()

  const onCategoryTextChanged = (event) => {
    // this.setState({ category: event.target.value })
    setCategory(event.target.value)
  }

  const onAddClicked = () => {
    // const newCategories = [...this.state.categories, this.state.category]
    // this.setState({ categories: newCategories })
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
