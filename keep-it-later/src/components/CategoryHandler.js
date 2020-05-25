import React from 'react'

import { CategoryCreator } from './CategoryCreator'
import { CategoryList } from './CategoryList'

export class CategoryHandler extends React.Component {
  state = {
    category: '',
    categories: []
  }

  onCategoryTextChange = (event) => {
    this.setState({ category: event.target.value })
  }
  render() {
    return (
      <div class='container' role='main' style={{ marginTop: '100px' }}>
        <CategoryCreator
          category={this.state.category}
          onCategoryTextChange={this.onCategoryTextChange}
        />
        <CategoryList />
      </div>
    )
  }
}
