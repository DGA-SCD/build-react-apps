import axios from 'axios'

const apiServerUrl = 'http://localhost:8000'

export const ADD_NEW_TASK = 'ADD_NEW_TASK'

export const addNewTask = (task) => {
  return {
    type: ADD_NEW_TASK,
    payload: task
  }
}

const fetchTasksSuccess = (allTasks) => ({
  type: 'FETCH_TASKS_SUCCESS',
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
