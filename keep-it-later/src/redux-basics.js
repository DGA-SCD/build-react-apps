const redux = require('redux')
const { configureStore, createAction, createReducer } = require('@reduxjs/toolkit')

const initialStateCounter = {
  counter: 0
}
const initialStateName = {
  name: 'Kan'
}

const ADD_ONE = 'ADD_ONE'

// Reducer
// const reducer = (state = initialState, action) => {
//   console.log('action in reducer', action)

//   if (action.type === ADD_ONE) {
//     // return (state.counter = state.counter + 1) ! Don't do this!
//     return {
//       counter: state.counter + action.payload
//     }
//   }

//   if (action.type === 'MULTIPLY_TEN') {
//     // We can hardcode 10 in this reducer like this
//     // return {
//     //   counter: state.counter * 10
//     // }
//     return {
//       counter: state.counter * action.payload
//     }
//   }

//   return state
// }

// Store
// const store = redux.createStore(reducer)

// const reducer = createReducer(initialState, {
//   ADD_ONE: (state, action) => {
//     return {
//       //name: 'Kan',
//       ...state,
//       counter: state.counter + action.payload
//     }
//   },
//   MULTIPLY_TEN: (state, action) => {
//     return {
//       ...state,
//       counter: state.counter * action.payload
//     }
//   }
// })

const counterReducer = createReducer(initialStateCounter, {
  ADD_ONE: (state, action) => {
    return {
      counter: state.counter + action.payload
    }
  },
  MULTIPLY_TEN: (state, action) => {
    return {
      counter: state.counter * action.payload
    }
  }
})

const nameReducer = createReducer(initialStateName, {
  REPLACE_NAME: (state, action) => {
    return {
      name: action.payload
    }
  }
})

const store = configureStore({
  reducer: {
    counterSlice: counterReducer,
    nameSlice: nameReducer
  }
})

// Dispatching Actions
// const addOne = () => {
//   return {
//     type: 'ADD_ONE',
//     payload: 1
//   }
// }

const addOne = createAction('ADD_ONE')

// const multiplyTen = () => {
//   return {
//     type: 'MULTIPLY_TEN',
//     payload: 10
//   }
// }

const multiplyTen = createAction('MULTIPLY_TEN')

const replaceName = createAction('REPLACE_NAME')

// Subscription
store.subscribe(() => {
  console.log('[Subscription]', store.getState())
})

store.dispatch(addOne(1))
store.dispatch(addOne(1))
store.dispatch(addOne(1))
store.dispatch(multiplyTen(10))
store.dispatch(replaceName('Gatuk'))

console.log(store.getState())
