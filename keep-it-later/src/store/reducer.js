import { createReducer, createAction } from '@reduxjs/toolkit'

const initialState = {
  allItems: []
}

export const reducer = createReducer(initialState, {
  ADD_ITEM: (state, action) => {
    return {
      allItems: state.allItems.concat(action.payload)
    }
  }
})

export const addItem = createAction('ADD_ITEM')
