import React from 'react'

import { CategoryCreator } from './CategoryCreator'
import { CategoryList } from './CategoryList'

export class CategoryHandler extends React.Component {
  state = {
    category: '',
    categories: []
  }

  onCategoryTextChanged = (event) => {
    this.setState({ category: event.target.value })
  }

  onAddClicked = () => {
    const newCategories = [...this.state.categories, this.state.category]
    this.setState({ categories: newCategories })
  }

  render() {
    return (
      <div class='container' role='main' style={{ marginTop: '100px' }}>
        <CategoryCreator
          category={this.state.category}
          onCategoryTextChanged={this.onCategoryTextChanged}
          onAddClicked={this.onAddClicked}
        />
        <CategoryList />
      </div>
    )
  }
}
