import { createReducer } from '@reduxjs/toolkit'

const initialState = {
  categoryId: 0
}

export const reducer = createReducer(initialState, {
  STORE_CATEGORY_ID: (state, action) => ({
    ...state,
    categoryId: action.payload
  })
})
