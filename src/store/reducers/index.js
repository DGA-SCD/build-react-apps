import { createReducer } from '@reduxjs/toolkit'

const initialState = {
  allItems: [],
  loading: false,
  textInput: '',
  categoryId: 0
}

export const reducer = createReducer(initialState, {
  ADD_NEW_ITEM: (state, action) => {
    return {
      ...state,
      allItems: state.allItems.concat({
        textInput: action.payload.textInput,
        categoryId: action.payload.categoryId
      })
    }
  },
  DELETE_ITEM: (state, action) => ({
    ...state,
    allItems: state.allItems.filter((item) => item.id !== action.payload)
  }),
  FETCH_ITEMS_PENDING: (state) => ({
    ...state,
    loading: true
  }),
  FETCH_ITEMS_SUCCESS: (state, action) => ({
    ...state,
    allItems: [...action.payload.allItems],
    loading: false
  }),
  STORE_TEXT_INPUT: (state, action) => ({
    ...state,
    textInput: action.payload
  }),
  STORE_CATEGORY_ID: (state, action) => ({
    ...state,
    categoryId: action.payload
  })
})
