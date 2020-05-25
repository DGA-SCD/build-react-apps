import React from 'react'

import { CategoryHandler } from '../organisms/CategoryHandler'
import { NavBarWrapper } from '../NavBar'

export const CategoriesTemplate = () => {
  return (
    <>
      <NavBarWrapper appName={'Keep it later!!!'} />
      <CategoryHandler />
    </>
  )
}
