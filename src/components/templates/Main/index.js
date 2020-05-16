import React from 'react'

import { NavBar } from '../../atoms/NavBar'
import { NoItem } from '../../atoms/NoItem'
import { ItemCreator } from '../../atoms/ItemCreator'
import { ItemList } from '../../atoms/ItemList'
import { CategoryFilterBox } from '../../atoms/CategoryFilterBox'

export class Main extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className='container' role='main' style={{ marginTop: '100px' }}>
          <ItemCreator />
          <div className='row'>
            <CategoryFilterBox />
            <NoItem />
            <ItemList />
          </div>
        </div>
      </div>
    )
  }
}
