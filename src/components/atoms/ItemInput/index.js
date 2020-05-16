import React from 'react'
import { connect } from 'react-redux'

import { storeTextInput } from '../../../store/actions'

class ItemInput extends React.Component {
  render() {
    return (
      <input
        type='text'
        placeholder='What URL do you wanna keep it for later?'
        className='form-control form-control-lg'
        name='url'
        value={this.props.textInput}
        onChange={(e) => this.props.storeTextInput(e.target.value)}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  textInput: state.textInput
})

const mapDispatchToProps = {
  storeTextInput
}

export const ConnectedItemInput = connect(mapStateToProps, mapDispatchToProps)(ItemInput)
