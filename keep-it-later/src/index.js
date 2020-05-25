import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import thunk from 'redux-thunk'

import { Provider } from 'react-redux'
import { reducer } from './store/reducer'
import { configureStore } from '@reduxjs/toolkit'
import { CategoryContextProvider } from './contexts'

// import Main from './components/Main'
// import { Categories } from './components/pages/Categories'
const Main = React.lazy(() => import('./components/Main'))
const Categories = React.lazy(() => import('./components/pages/Categories'))

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
              <Suspense fallback={<div>Loading...</div>}>
                <Main />
              </Suspense>
            </Route>
            <Route path='/categories'>
              <Suspense fallback={<div>Loading...</div>}>
                <Categories />
              </Suspense>
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
