import React from 'react'
import { connect } from 'react-redux'

import { Item } from '../../atoms/Item'

class ItemList extends React.Component {
  render() {
    return (
      <div className='col'>
        {this.props.allItems.map((item) => (
          <Item url={item.textInput} categoryName='test' />
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  allItems: state.allItems
})

export const ConnectedItemList = connect(mapStateToProps)(ItemList)
