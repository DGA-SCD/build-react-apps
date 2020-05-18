import React from 'react'

import { NavBar } from './NavBar'
import { ItemHandler } from './ItemHandler'

class Main extends React.Component {
  state = {
    itemUrl: '',
    category: '',
    items: [] // [{ itemUrl: 'www.google.com', category: 'Knowledge'}, { itemUrl: ..., category: ... }]
  }

  onItemUrlChange = (event) => {
    this.setState({ itemUrl: event.target.value })
  }

  onCategoryChange = (event) => {
    this.setState({ category: event.target.value })
  }

  onAddClicked = () => {
    const newItem = {
      itemUrl: this.state.itemUrl,
      category: this.state.category
    }

    const newItems = this.state.items.concat(newItem)
    this.setState({ items: newItems })
  }

  shouldComponentUpdate() {
    console.log('should component update')
    return true
  }

  componentDidMount() {
    console.log('component did mount')
  }

  componentDidUpdate() {
    console.log('component did update')
  }

  render() {
    console.log('render')
    return (
      <div>
        <NavBar appName='Keep it later!!!!' />
        <ItemHandler
          itemUrl={this.state.itemUrl}
          onItemUrlChange={this.onItemUrlChange}
          category={this.state.category}
          onCategoryChange={this.onCategoryChange}
          onAddClicked={this.onAddClicked}
          items={this.state.items}
        />
      </div>
    )
  }
}

export default Main
