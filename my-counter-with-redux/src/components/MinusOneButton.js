import React from 'react'
import { connect } from 'react-redux'

import { decrement } from '../actions'

const MinusOneButton = (props) => {
  return (
    <button type='button' class='btn btn-outline-info' onClick={() => props.decrement(1)}>
      -1
    </button>
  )
}

const mapDispatchToProps = {
  decrement
}

export const ConnectedMinusOneButton = connect(null, mapDispatchToProps)(MinusOneButton)
