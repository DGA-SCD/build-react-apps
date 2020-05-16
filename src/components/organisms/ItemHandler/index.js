import React from 'react'
import { connect } from 'react-redux'

import { NoItem } from '../../atoms/NoItem'
import { ItemCreator } from '../../molecules/ItemCreator'
import { ConnectedItemList } from '../../molecules/ItemList'
import { CategoryFilterBox } from '../../atoms/CategoryFilterBox'
import { fetchItems } from '../../../store/actions'

class ItemHandler extends React.Component {
  componentDidMount() {
    this.props.fetchItems()
  }

  render() {
    return (
      <div className='container' role='main' style={{ marginTop: '100px' }}>
        <ItemCreator />
        <div className='row'>
          <CategoryFilterBox />
          {this.props.allItems.length > 0 ? <ConnectedItemList /> : <NoItem />}
        </div>
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

export const ConnectedItemHandler = connect(mapStateToProps, mapDispatchToProps)(ItemHandler)
