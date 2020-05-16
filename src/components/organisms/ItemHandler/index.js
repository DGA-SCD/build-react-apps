import React from 'react'

import { NoItem } from '../../atoms/NoItem'
import { ItemCreator } from '../../molecules/ItemCreator'
import { ItemList } from '../../molecules/ItemList'
import { CategoryFilterBox } from '../../atoms/CategoryFilterBox'

export const ItemHandler = () => (
  <div className='container' role='main' style={{ marginTop: '100px' }}>
    <ItemCreator />
    <div className='row'>
      <CategoryFilterBox />
      <NoItem />
      <ItemList />
    </div>
  </div>
)
