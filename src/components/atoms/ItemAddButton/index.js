import React from 'react'
import { connect } from 'react-redux'

import { addNewItem } from '../../../store/actions'

class ItemAddButton extends React.Component {
  render() {
    return (
      <button
        type='button'
        className='btn btn-success btn-lg'
        onClick={() =>
          this.props.addNewItem({
            textInput: this.props.textInput,
            categoryId: this.props.categoryId
          })
        }
      >
        Add
      </button>
    )
  }
}

const mapStateToProps = (state) => ({
  textInput: state.textInput,
  categoryId: state.categoryId
})

const mapDispatchToProps = {
  addNewItem
}

export const ConnectedItemAddButton = connect(mapStateToProps, mapDispatchToProps)(ItemAddButton)
