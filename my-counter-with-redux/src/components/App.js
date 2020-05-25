import React from 'react'

import { Title } from './Title'
import { CounterLeft } from './CounterLeft'

const App = () => {
  return (
    <div class='container text-center pt-3'>
      <Title />
      <div class='row pt-5'>
        <CounterLeft />
        <div class='col'>
          <h2>5</h2>
          <div>
            <button type='button' class='btn btn-outline-info mr-1'>
              x2
            </button>
            <button type='button' class='btn btn-outline-info'>
              -2
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
