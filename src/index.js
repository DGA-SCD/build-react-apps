import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import axios from 'axios'

import { Main } from './components/pages/Main'
import { Categories } from './components/pages/Categories'
import * as serviceWorker from './serviceWorker'
import { reducer as categoriesReducer } from './store/reducers/categories'
import { reducer as itemsReducer } from './store/reducers/items'
import { reducer as textInputsReducer } from './store/reducers/textInputs'
import { CategoriesContextProvider } from './contexts'

axios.defaults.baseURL = 'http://localhost:8000'

const store = configureStore({
  reducer: { categories: categoriesReducer, items: itemsReducer, textInputs: textInputsReducer },
  middleware: [thunk]
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CategoriesContextProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Main />
            </Route>
            <Route path='/categories'>
              <Categories />
            </Route>
          </Switch>
        </Router>
      </CategoriesContextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
