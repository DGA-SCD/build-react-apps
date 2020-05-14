export const ADD_NEW_TASK = 'ADD_NEW_TASK'

export const addNewTask = (task) => {
  return {
    type: ADD_NEW_TASK,
    payload: task
  }
}
