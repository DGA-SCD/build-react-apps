import { createReducer } from '@reduxjs/toolkit'

const initialState = {
  allTasks: [],
  loading: false
}

export const reducer = createReducer(initialState, {
  ADD_NEW_TASK: (state, action) => ({
    ...state,
    allTasks: state.allTasks.concat(action.payload)
  }),
  DELETE_TASK: (state, action) => ({
    ...state,
    allTasks: state.allTasks.filter((task) => task.id !== action.payload)
  }),
  FETCH_TASKS_PENDING: (state) => ({
    ...state,
    loading: true
  }),
  FETCH_TASKS_SUCCESS: (_, action) => ({
    allTasks: [...action.payload],
    loading: false
  })
})
