import React from 'react'
import axios from 'axios'

import { useCategories } from '../hooks/useCategories'

export const CategoriesContext = React.createContext({})

export const CategoriesContextProvider = ({ children }) => {
  const [categories, setCategory] = useCategories()

  const addNewCategoryToContext = async (category) => {
    const response = await axios.post('http://localhost:8000/categories', category)
    const data = response.data

    const newCategories = categories.concat(data)
    setCategory(newCategories)
  }

  const removeCategoryFromContext = async (categoryId) => {
    await axios.delete(`http://localhost:8000/categories/${categoryId}`)
    const newCategories = categories.filter((category) => category.id !== categoryId)
    setCategory(newCategories)
  }

  const value = {
    categories: categories,
    addNewCategoryToContext: addNewCategoryToContext,
    removeCategoryFromContext: removeCategoryFromContext
  }

  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}
