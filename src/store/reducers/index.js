import { createReducer } from '@reduxjs/toolkit'

const initialState = {
  allItems: [],
  loading: false,
  inputText: ''
}

export const reducer = createReducer(initialState, {
  ADD_NEW_ITEM: (state, action) => ({
    ...state,
    allItems: state.allItems.concat(action.payload)
  }),
  DELETE_ITEM: (state, action) => ({
    ...state,
    allItems: state.allItems.filter((item) => item.id !== action.payload)
  }),
  FETCH_ITEMS_PENDING: (state) => ({
    ...state,
    loading: true
  }),
  FETCH_ITEMS_SUCCESS: (_, action) => ({
    allItems: [...action.payload],
    loading: false
  }),
  STORE_INPUT_TEXT: (state, action) => ({
    ...state,
    inputText: action.payload
  })
})
