import { createAction } from '@reduxjs/toolkit'
import axios from 'axios'

const apiServerUrl = 'http://localhost:8000'

export const addNewTask = createAction('ADD_NEW_TASK')

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

export const fetchTasksSuccess = createAction('FETCH_TASKS_SUCCESS')

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

export const deleteTask = createAction('DELETE_TASK')

export const deleteTaskAsync = (id) => {
  return (dispatch) => {
    axios.delete(`${apiServerUrl}/tasks/${id}`)
    dispatch(deleteTask(id))
  }
}
