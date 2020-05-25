import React from 'react'
import { connect } from 'react-redux'

const NumberLeft = (props) => {
  return <h2>{props.counter}</h2>
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

export const ConnectedNumberLeft = connect(mapStateToProps, null)(NumberLeft)
