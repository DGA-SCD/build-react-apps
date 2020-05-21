import React from 'react'
import { connect } from 'react-redux'

import { increment } from '../index'

const PlusOneButton = (props) => {
  return (
    <button type='button' class='btn btn-outline-info mr-1' onClick={props.increment}>
      +1
    </button>
  )
}

const mapDispatchToProps = {
  increment
}

export const ConnectedPlusOneButton = connect(null, mapDispatchToProps)(PlusOneButton)
