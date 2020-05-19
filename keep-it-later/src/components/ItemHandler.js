import React from 'react'

import { ConnectedItemCreator } from './ItemCreator'
import { CategoryFilterBox } from './CategoryFilterBox'
import { ConnectedItemList } from './ItemList'

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
      <ConnectedItemCreator
        url={url}
        onItemUrlChange={onItemUrlChange}
        category_name={category_name}
        onCategoryChange={onCategoryChange}
        onAddClicked={onAddClicked}
      />
      <div className='row'>
        <CategoryFilterBox />
        <ConnectedItemList />
      </div>
    </div>
  )
}
