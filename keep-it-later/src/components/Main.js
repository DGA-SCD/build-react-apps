import React from 'react'

import { NavBar } from './NavBar'
import { ItemHandler } from './ItemHandler'

class Main extends React.Component {
  state = {
    itemUrl: ''
  }

  onItemUrlChange = (event) => {
    this.setState({ itemUrl: event.target.value })
  }

  render() {
    return (
      <div>
        <NavBar appName='Keep it later!!!!' />
        <ItemHandler itemUrl={this.state.itemUrl} onItemUrlChange={this.onItemUrlChange} />
      </div>
    )
  }
}

export default Main
