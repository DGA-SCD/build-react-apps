import { createReducer } from '@reduxjs/toolkit'

const initialState = {
  allItems: []
}

export const reducer = createReducer(initialState, {
  ADD_ITEM: (state, action) => {
    return {
      allItems: state.allItems.concat(action.payload)
    }
  },
  DELETE_ITEM: (state, action) => {
    return {
      allItems: state.allItems.filter((item) => {
        return item.id != action.payload
      })
    }
  }
})
