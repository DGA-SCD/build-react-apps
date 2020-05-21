import React from 'react'
import { connect } from 'react-redux'

import { increment } from '../index'

export const PlusOneButton = () => {
  return (
    <button type='button' class='btn btn-outline-info mr-1'>
      +1
    </button>
  )
}

const mapDispatchToProps = {
  increment
}

connect(null, mapDispatchToProps)(PlusOneButton)
