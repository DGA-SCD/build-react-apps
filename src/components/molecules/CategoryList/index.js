import React from 'react'

import { CategoryItem } from '../../atoms/CategoryItem'

export const CategoryList = (props) => {
  return (
    <ul>
      {props.categories.map((item) => (
        <CategoryItem name={item} />
      ))}
    </ul>
  )
}
