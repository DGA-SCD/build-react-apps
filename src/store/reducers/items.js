import { createReducer } from '@reduxjs/toolkit'

const initialState = {
  allItems: [],
  loading: false
}

export const reducer = createReducer(initialState, {
  ADD_NEW_ITEM: (state, action) => {
    return {
      ...state,
      allItems: [
        {
          id: action.payload.itemId,
          textInput: action.payload.textInput,
          categoryId: action.payload.categoryId,
          categoryName: action.payload.categoryName
        },
        ...state.allItems
      ]
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
    allItems: [...action.payload],
    loading: false
  })
})
