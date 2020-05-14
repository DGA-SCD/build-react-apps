import { ADD_NEW_TASK, FETCH_TASKS_SUCCESS, DELETE_TASK } from '../actions/types'

const initialState = {
  allTasks: []
}

export const reducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case ADD_NEW_TASK:
      return {
        allTasks: state.allTasks.concat(action.payload)
      }
    case FETCH_TASKS_SUCCESS:
      return {
        allTasks: [...action.payload]
      }
    case DELETE_TASK:
      return {
        allTasks: state.allTasks.filter((task) => task.id !== action.payload)
      }
    default:
      return state
  }
}
