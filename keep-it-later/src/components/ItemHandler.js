import React from 'react'

import { ItemCreator } from './ItemCreator'
import { CategoryFilterBox } from './CategoryFilterBox'
import { ItemList } from './ItemList'

export const ItemHandler = ({
  itemUrl,
  onItemUrlChange,
  category,
  onCategoryChange,
  onAddClicked,
  items
}) => {
  return (
    <div className='container' role='main' style={{ marginTop: '100px' }}>
      <ItemCreator
        itemUrl={itemUrl}
        onItemUrlChange={onItemUrlChange}
        category={category}
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
