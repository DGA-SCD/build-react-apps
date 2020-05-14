import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import './index.css'
import App from './App'
import Login from './components/Login'
import * as serviceWorker from './serviceWorker'
import { reducer } from './store/reducers'

const store = configureStore({
  reducer,
  middleware: [thunk]
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='/app'>
            <App />
          </Route>
          <Route path='/'>
            <Login />
          </Route>
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
