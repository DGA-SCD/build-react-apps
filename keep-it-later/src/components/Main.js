import React from 'react'
import axios from 'axios'

import { NavBarWrapper } from './NavBar'
import { ItemHandler } from './ItemHandler'
import { CategoryHandler } from './CategoryHandler'

class Main extends React.Component {
  state = {
    url: '',
    category_name: '',
    items: [] // [{ itemUrl: 'www.google.com', category: 'Knowledge'}, { itemUrl: ..., category: ... }]
  }

  onItemUrlChange = (event) => {
    this.setState({ url: event.target.value })
  }

  onCategoryChange = (event) => {
    this.setState({ category_name: event.target.value })
  }

  onAddClicked = () => {
    const newItem = {
      url: this.state.url,
      category_name: this.state.category_name
    }

    const newItems = this.state.items.concat(newItem)
    this.setState({ items: newItems })
  }

  // shouldComponentUpdate() {
  //   console.log('should component update')
  //   return true
  // }

  // getItems = async () => {
  //   const response = await axios.get('http://localhost:8000/items')
  //   return response
  // }

  async componentDidMount() {
    console.log('component did mount')
    // axios.get('http://localhost:8000/items').then((response) => {
    //   console.log(response)
    //   this.setState({ items: response.data })
    // })
    // .catch(error=>..)

    // try {
    //   const response = await axios.get('http://localhost:8000/items')
    //   this.setState({ items: response.data })
    // } catch (error) {
    //   console.error(error)
    // }
  }

  // componentDidUpdate() {
  //   console.log('component did update')
  // }

  render() {
    //console.log('render')
    return (
      <div>
        <NavBarWrapper appName='Keep it later!!!!' />
        <ItemHandler
          url={this.state.url}
          onItemUrlChange={this.onItemUrlChange}
          category_name={this.state.category_name}
          onCategoryChange={this.onCategoryChange}
          onAddClicked={this.onAddClicked}
          items={this.state.items}
        />
      </div>
    )
  }
}

export default Main
