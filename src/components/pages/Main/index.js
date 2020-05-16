import React from 'react'
import { connect } from 'react-redux'

import { NavBar } from '../../atoms/NavBar'
import { NoItem } from '../../atoms/NoItem'
import { ItemCreator } from '../../atoms/ItemCreator'
import { ItemList } from '../../atoms/ItemList'
import { addNewTaskAsync, deleteTaskAsync, fetchTasks } from '../../../store/actions'

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
    const allItems = this.props.allItems || []

    // console.log('loading:', this.props.loading)
    // if (this.props.loading) {
    //   return <div>Loading...</div>
    // }

    return (
      <div>
        <NavBar />
        <div className='container' role='main' style={{ marginTop: '100px' }}>
          <div className='row'>
            <div className='col-9'>
              <input
                type='text'
                placeholder='What do you wanna keep?'
                className='form-control form-control-lg'
                name='task'
                value={this.state.itemUrl}
                onChange={this.onItemInputChange}
              />
            </div>
            <div className='form-group'>
              <select
                className='form-control form-control-lg custom-select'
                id='category'
                style={{ height: '45px' }}
              >
                <option disabled='' selected=''>
                  Category
                </option>
                <option>Study</option>
                <option>Workout</option>
                <option>Housekeeping</option>
              </select>
            </div>
            <div className='col'>
              <button
                type='button'
                className='btn btn-success btn-lg'
                onClick={this.onAddButtonClicked}
              >
                Add
              </button>
            </div>
          </div>
          <div className='row'>
            <div className='col-3'>
              <div className='list-group'>
                <button type='button' className='list-group-item'>
                  Categories
                </button>
                <button type='button' className='list-group-item list-group-item-action'>
                  Study
                </button>
                <button type='button' className='list-group-item list-group-item-action'>
                  Workout
                </button>
              </div>
            </div>
            <div className='col'>
              <div className='row'>
                <div className='col-md-6 col-sm-12'>
                  <div className='card mb-4 shadow-sm'>
                    <img
                      className='card-img-top'
                      width='100%'
                      height='225'
                      src={this.state.itemUrl}
                    />
                    <div className='card-body'>
                      <p className='card-text'>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                      </p>
                      <div className='d-flex justify-content-end'>
                        <h4>
                          <span className='badge badge-info'>Workout</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-6 col-sm-12'>
                  <div className='card mb-4 shadow-sm'>
                    <img className='card-img-top' width='100%' height='225' src='' />
                    <div className='card-body'>
                      <p className='card-text'>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                      </p>
                      <div className='d-flex justify-content-end'>
                        <h4>
                          <span className='badge badge-info'>Housekeeping</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-6 col-sm-12'>
                  <div className='card mb-4 shadow-sm'>
                    <img className='card-img-top' width='100%' height='225' src='' />
                    <div className='card-body'>
                      <p className='card-text'>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                      </p>
                      <div className='d-flex justify-content-end'>
                        <h4>
                          <span className='badge badge-info'>Workout</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-6 col-sm-12'>
                  <div className='card mb-4 shadow-sm'>
                    <img className='card-img-top' width='100%' height='225' src='' />
                    <div className='card-body'>
                      <p className='card-text'>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                      </p>
                      <div className='d-flex justify-content-end'>
                        <h4>
                          <span className='badge badge-info'>Study</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
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
