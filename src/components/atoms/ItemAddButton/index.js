import React from 'react'
import { connect } from 'react-redux'

import { addNewItemAsync } from '../../../store/actions'

const ItemAddButton = (props) => {
  return (
    <button
      type='button'
      className='btn btn-success btn-lg'
      onClick={() =>
        props.addNewItemAsync({
          textInput: props.textInput,
          categoryId: props.categoryId
        })
      }
    >
      Add
    </button>
  )
}

const mapStateToProps = (state) => ({
  textInput: state.textInput,
  categoryId: state.categoryId
})

const mapDispatchToProps = {
  addNewItemAsync
}

export const ConnectedItemAddButton = connect(mapStateToProps, mapDispatchToProps)(ItemAddButton)
