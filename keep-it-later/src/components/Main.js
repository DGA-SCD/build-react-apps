import React from 'react'

import { NavBar } from './NavBar'
import { ItemHandler } from './ItemHandler'

class Main extends React.Component {
  state = {
    itemUrl: '',
    category: ''
  }

  onItemUrlChange = (event) => {
    this.setState({ itemUrl: event.target.value })
  }

  onCategoryChange = (event) => {
    this.setState({ category: event.target.value })
  }

  render() {
    return (
      <div>
        <NavBar appName='Keep it later!!!!' />
        <ItemHandler
          itemUrl={this.state.itemUrl}
          onItemUrlChange={this.onItemUrlChange}
          category={this.state.category}
          onCategoryChange={this.onCategoryChange}
        />
      </div>
    )
  }
}

export default Main
