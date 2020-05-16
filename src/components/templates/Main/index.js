import React from 'react'

import { NavBar } from '../../atoms/NavBar'
import { ConnectedItemHandler } from '../../organisms/ItemHandler'

export class Main extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <ConnectedItemHandler />
      </div>
    )
  }
}
