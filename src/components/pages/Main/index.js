import React from 'react'
// import { connect } from 'react-redux'

import { Main as MainTemplate } from '../../templates/Main'

export class Main extends React.Component {
  state = {
    itemUrl: '',
    allItems: []
  }

  // componentDidMount() {
  //   this.props.fetchItems()
  // }

  onItemInputChange = (event) => {
    this.setState({ itemUrl: event.target.value })
  }

  // onCategoryChange = (event) => {
  //   this.setState()
  // }

  onAddButtonClicked = () => {
    const newItem = {
      itemUrl: this.state.itemUrl
      // category: this.state.category,
      // username: window.sessionStorage.getItem('username')
    }
    const allItems = this.state.allItems.concat(newItem)
    this.setState({ itemUrl: '', allItems })
    // this.props.addNewItemsync(newTask)
  }

  // onRemoveClicked = (taskId) => {
  //   this.props.deleteItemAsync(taskId)
  // }

  render() {
    // const allItems = this.props.allItems || []

    // console.log('loading:', this.props.loading)
    // if (this.props.loading) {
    //   return <div>Loading...</div>
    // }

    return <MainTemplate />
  }
}

// const mapStateToProps = (state) => {
//   return state
// }

// const mapDisptachToProps = {
//   addNewTaskAsync,
//   deleteTaskAsync,
//   fetchTasks
// }

// export default connect(mapStateToProps, mapDisptachToProps)(Main)
