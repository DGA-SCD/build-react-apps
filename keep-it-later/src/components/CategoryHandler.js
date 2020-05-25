import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { CategoryCreator } from './CategoryCreator'
import { CategoryList } from './CategoryList'

// define custom hook
const useCategories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get('http://localhost:8000/categories')
      console.log(response)
      setCategories(response.data)
    }

    fetchCategories()
  }, [])

  return [categories, setCategories]
}

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
