import React from 'react'
import { connect } from 'react-redux'

import './App.css'
import { nowUTC } from './utils'
import { NavBar } from './components/NavBar'
import { NoTask } from './components/NoTask'
import { TaskCreator } from './components/TaskCreator'
import { TaskList } from './components/TaskList'
import { addNewTaskAsync, deleteTaskAsync, fetchTasks } from './store/actions'

class App extends React.Component {
  state = {
    task: '',
    category: 'study',
    isStarted: false,
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
    const currentDateTime = nowUTC()
    const newTask = {
      name: this.state.task,
      category: this.state.category,
      startedAt: this.state.startedAt,
      endedAt: currentDateTime,
      username: window.sessionStorage.getItem('username')
    }

    const isStarted = !this.state.isStarted
    this.setState({ isStarted: isStarted })

    if (isStarted === true) {
      this.setState({ startedAt: currentDateTime })
    } else {
      this.props.addNewTaskAsync(newTask)
    }
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
            isStarted={this.state.isStarted}
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
