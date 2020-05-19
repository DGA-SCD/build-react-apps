const redux = require('redux')

const initialState = {
  counter: 0
}

// Reducer
const reducer = (state = initialState, action) => {
  console.log('action in reducer', action)

  if (action.type === 'ADD_ONE') {
    return {
      counter: state.counter + action.payload
    }
  }

  return state
}

// Store
const store = redux.createStore(reducer)

// Dispatching Actions
const action = () => {
  return {
    type: 'ADD_ONE',
    payload: 1
  }
}

// Subscription
store.subscribe(() => {
  console.log('[Subscription]', store.getState())
})

store.dispatch(action())
store.dispatch(action())
store.dispatch(action())

console.log(store.getState())
