import { createReducer } from '@reduxjs/toolkit'

const initialState = {
  textInput: ''
}

export const reducer = createReducer(initialState, {
  STORE_TEXT_INPUT: (state, action) => ({
    ...state,
    textInput: action.payload
  })
})
