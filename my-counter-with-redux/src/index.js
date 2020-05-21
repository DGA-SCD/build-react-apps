import React from 'react'
import ReactDOM from 'react-dom'
import { configureStore, createReducer } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import App from './components/App'
import * as serviceWorker from './serviceWorker'

const initialState = {
  counter: 0
}

const reducer = createReducer(initialState, {})

const store = configureStore({
  reducer: reducer
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
