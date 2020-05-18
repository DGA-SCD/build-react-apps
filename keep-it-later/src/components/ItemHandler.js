import React from 'react'

import { ItemCreator } from './ItemCreator'
import { CategoryFilterBox } from './CategoryFilterBox'
import { ItemList } from './ItemList'

export const ItemHandler = ({ itemUrl, onItemUrlChange }) => {
  return (
    <div className='container' role='main' style={{ marginTop: '100px' }}>
      <ItemCreator itemUrl={itemUrl} onItemUrlChange={onItemUrlChange} />
      <div className='row'>
        <CategoryFilterBox />
        <ItemList />
      </div>
    </div>
  )
}
