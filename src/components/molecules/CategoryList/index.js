import React, { useContext } from 'react'

import { CategoryItem } from '../../atoms/CategoryItem'
import { CategoriesContext } from '../../../contexts'

export const CategoryList = (props) => {
  const { removeCategoryFromContext } = useContext(CategoriesContext)

  const onRemoveClicked = (categoryId) => {
    removeCategoryFromContext(categoryId)
  }

  return (
    <ul className={props.className}>
      {props.categories.map((item) => (
        <CategoryItem
          key={item.id}
          name={item.name}
          onRemoveClicked={() => onRemoveClicked(item.id)}
        />
      ))}
    </ul>
  )
}
