import React from 'react'

import { NavBarEnhancer as NavBar } from '../../atoms/NavBar'
import { CategoryHandler } from '../../organisms/CategoryHandler'

export const Categories = () => {
  return (
    <div>
      <NavBar />
      <CategoryHandler />
    </div>
  )
}
