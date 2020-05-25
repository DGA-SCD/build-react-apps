import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Main from './components/Main'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import thunk from 'redux-thunk'

import { Provider } from 'react-redux'
import { reducer } from './store/reducer'
import { configureStore } from '@reduxjs/toolkit'
import { Categories } from './components/pages/Categories'
import { CategoryContextProvider } from './contexts'

const store = configureStore({
  reducer: reducer,
  middleware: [thunk]
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <CategoryContextProvider>
          <Switch>
            <Route exact path='/'>
              <Main />
            </Route>
            <Route path='/categories'>
              <Categories />
            </Route>
          </Switch>
        </CategoryContextProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
