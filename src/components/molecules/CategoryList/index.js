import React from 'react'

import { CategoryItem } from '../../atoms/CategoryItem'

export const CategoryList = (props) => {
  return (
    <ul className={props.className}>
      {props.categories.map((item) => (
        <CategoryItem key={item.id} name={item.name} />
      ))}
    </ul>
  )
}
