import React from 'react'

import { ItemInput } from '../../atoms/ItemInput'
import { CategorySelectBox } from '../../atoms/CategorySelectBox'
import { ItemAddButton } from '../../atoms/ItemAddButton'

export const ItemCreator = (props) => {
  return (
    <div className='row'>
      <div className='col-9'>
        <ItemInput />
      </div>
      <div className='col form-group'>
        <CategorySelectBox />
      </div>
      <div className='col'>
        <ItemAddButton />
      </div>
    </div>
  )
}
