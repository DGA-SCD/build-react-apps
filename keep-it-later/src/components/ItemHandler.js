import React from 'react'

import { ItemCreator } from './ItemCreator'
import { CategoryFilterBox } from './CategoryFilterBox'
import { ItemList } from './ItemList'

export const ItemHandler = ({
  url,
  onItemUrlChange,
  category_name,
  onCategoryChange,
  onAddClicked,
  items
}) => {
  return (
    <div className='container' role='main' style={{ marginTop: '100px' }}>
      <ItemCreator
        url={url}
        onItemUrlChange={onItemUrlChange}
        category_name={category_name}
        onCategoryChange={onCategoryChange}
        onAddClicked={onAddClicked}
      />
      <div className='row'>
        <CategoryFilterBox />
        <ItemList items={items} />
      </div>
    </div>
  )
}
