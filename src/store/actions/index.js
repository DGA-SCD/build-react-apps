import axios from 'axios'

import { ADD_NEW_TASK, DELETE_TASK, FETCH_TASKS_SUCCESS } from './types'

const apiServerUrl = 'http://localhost:8000'

const addNewTask = (task) => {
  return {
    type: ADD_NEW_TASK,
    payload: task
  }
}

export const addNewTaskAsync = (task) => {
  return (dispatch) => {
    axios.post(`${apiServerUrl}/tasks`, {
      name: task.name,
      category: task.category,
      started_at: task.startedAt,
      ended_at: task.endedAt,
      username: window.sessionStorage.getItem('username')
    })
    dispatch(addNewTask(task))
  }
}

const fetchTasksSuccess = (allTasks) => ({
  type: FETCH_TASKS_SUCCESS,
  payload: allTasks
})

export const fetchTasks = () => {
  return (dispatch) => {
    axios.get(`${apiServerUrl}/tasks`).then((response) => {
      const tasksFromAPI = response.data
      const allTasks = tasksFromAPI.map((task) => {
        return {
          id: task.id,
          name: task.name,
          category: task.category,
          username: task.username,
          startedAt: task.started_at,
          endedAt: task.ended_at
        }
      })
      dispatch(fetchTasksSuccess(allTasks))
    })
  }
}

const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    payload: id
  }
}

export const deleteTaskAsync = (id) => {
  return (dispatch) => {
    axios.delete(`${apiServerUrl}/tasks/${id}`)
    dispatch(deleteTask(id))
  }
}
