import React from 'react'

import { NavBar } from '../../atoms/NavBar'
import { ItemHandler } from '../../organisms/ItemHandler'

export class Main extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <ItemHandler />
      </div>
    )
  }
}
