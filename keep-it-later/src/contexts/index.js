import React from 'react'

import { useCategories } from '../hooks'

// 1. create context
export const CategoryContext = React.createContext({})

// 2. create context provider
export const CategoryContextProvider = ({ children }) => {
  const [categories, setCategories] = useCategories()

  const value = {
    categories: categories
  }
  return <CategoryContext.Provider value={value}>{children}</CategoryContext.Provider>
}

// 3. create context consumer
