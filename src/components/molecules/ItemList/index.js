import React from 'react'
import { connect } from 'react-redux'

import { Item } from '../../atoms/Item'
import { fetchItems } from '../../../store/actions'

class ItemList extends React.Component {
  componentDidMount() {
    this.props.fetchItems()
  }

  render() {
    return (
      <div className='col'>
        {this.props.allItems.map((item) => (
          <Item url={item.url} categoryName={item.categoryName} />
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  allItems: state.allItems
})

const mapDispatchToProps = {
  fetchItems
}

export const ConnectedItemList = connect(mapStateToProps, mapDispatchToProps)(ItemList)
