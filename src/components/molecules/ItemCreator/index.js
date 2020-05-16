import React from 'react'

import { ConnectedItemInput } from '../../atoms/ItemInput'
import { ConnectedCategorySelectBox } from '../../atoms/CategorySelectBox'
import { ConnectedItemAddButton } from '../../atoms/ItemAddButton'

export const ItemCreator = () => {
  return (
    <div className='row'>
      <div className='col-9'>
        <ConnectedItemInput />
      </div>
      <div className='col form-group'>
        <ConnectedCategorySelectBox />
      </div>
      <div className='col'>
        <ConnectedItemAddButton />
      </div>
    </div>
  )
}
