import React from 'react'
import { connect } from 'react-redux'

import { storeInputText } from '../../../store/actions'

class ItemInput extends React.Component {
  render() {
    return (
      <input
        type='text'
        placeholder='What URL do you wanna keep it for later?'
        className='form-control form-control-lg'
        name='url'
        value={this.props.inputText}
        onChange={(e) => this.props.storeInputText(e.target.value)}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  inputText: state.inputText
})

const mapDispatchToProps = {
  storeInputText
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemInput)
