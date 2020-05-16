import React from 'react'
import { connect } from 'react-redux'

import './App.css'
import { NavBar } from './components/NavBar'
import { NoTask } from './components/NoTask'
import { TaskCreator } from './components/TaskCreator'
import { TaskList } from './components/TaskList'
import { addNewTaskAsync, deleteTaskAsync, fetchTasks } from './store/actions'

class App extends React.Component {
  state = {
    task: '',
    category: 'study',
    startedAt: '',
    endedAt: ''
  }

  componentDidMount() {
    this.props.fetchTasks()
  }

  onTaskChange = (event) => {
    this.setState({ task: event.target.value })
  }

  onCategoryChange = (event) => {
    this.setState({ category: event.target.value })
  }

  onAddClicked = () => {
    const newTask = {
      name: this.state.task,
      category: this.state.category,
      username: window.sessionStorage.getItem('username')
    }
    this.props.addNewTaskAsync(newTask)
  }

  onRemoveClicked = (taskId) => {
    this.props.deleteTaskAsync(taskId)
  }

  render() {
    const allTasks = this.props.allTasks || []

    console.log('loading:', this.props.loading)
    if (this.props.loading) {
      return <div>Loading...</div>
    }

    return (
      <div className='App'>
        <NavBar />
        <div className='container' role='main' style={{ marginTop: '100px' }}>
          <TaskCreator
            taskName={this.state.task}
            onTaskChange={this.onTaskChange}
            category={this.state.category}
            onCategoryChange={this.onCategoryChange}
            onAddClicked={this.onAddClicked}
          />
          {allTasks < 1 ? (
            <NoTask />
          ) : (
            <TaskList allTasks={allTasks} onRemoveClicked={this.onRemoveClicked} />
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

const mapDisptachToProps = {
  addNewTaskAsync,
  deleteTaskAsync,
  fetchTasks
}

export default connect(mapStateToProps, mapDisptachToProps)(App)
