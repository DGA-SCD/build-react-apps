import React from 'react'

import { useCategories } from '../hooks/useCategories'

export const CategoriesContext = React.createContext({})

export const CategoriesContextProvider = ({ children }) => {
  const categories = useCategories()

  const value = {
    categories: categories
  }

  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}
