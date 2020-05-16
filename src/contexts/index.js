import React from 'react'
import axios from 'axios'

import { useCategories } from '../hooks/useCategories'

export const CategoriesContext = React.createContext({})

export const CategoriesContextProvider = ({ children }) => {
  const [categories, setCategory] = useCategories()

  const addNewCategory = (category) => {
    const newCategories = categories.concat(category)
    setCategory(newCategories)
    axios.post('http://localhost:8000/categories', category)
  }

  const value = {
    categories: categories,
    addNewCategory: addNewCategory
  }

  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}
