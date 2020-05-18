import React from 'react'

import { ItemCreator } from './ItemCreator'
import { CategoryFilterBox } from './CategoryFilterBox'
import { ItemList } from './ItemList'

export const ItemHandler = () => {
  return (
    <div className='container' role='main' style={{ marginTop: '100px' }}>
      <ItemCreator />
      <div className='row'>
        <CategoryFilterBox />
        <ItemList />
      </div>
    </div>
  )
}
