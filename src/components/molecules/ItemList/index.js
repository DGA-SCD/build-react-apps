import React from 'react'
import { connect } from 'react-redux'

import { ConnectedItem } from '../../atoms/Item'

const ItemList = (props) => {
  return (
    <div className='col'>
      {props.allItems.map((item) => (
        <ConnectedItem itemId={item.id} url={item.textInput} categoryName={item.categoryName} />
      ))}
    </div>
  )
}

const mapStateToProps = (state) => ({
  allItems: state.allItems
})

export const ConnectedItemList = connect(mapStateToProps)(ItemList)
