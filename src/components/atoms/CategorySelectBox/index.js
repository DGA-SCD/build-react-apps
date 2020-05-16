import React from 'react'
import { connect } from 'react-redux'

import { storeCategoryId } from '../../../store/actions'

class CategorySelectBox extends React.Component {
  render() {
    return (
      <select
        className='form-control form-control-lg custom-select'
        id='category'
        style={{ height: '45px' }}
        onChange={(e) => this.props.storeCategoryId(e.target.value)}
      >
        <option disabled='' selected=''>
          Category
        </option>
        <option value={1}>Study</option>
        <option value={2}>Workout</option>
        <option value={3}>Housekeeping</option>
      </select>
    )
  }
}

const mapStateToProps = (state) => ({
  categoryId: state.categoryId
})

const mapDispatchToProps = {
  storeCategoryId
}

export default connect(mapStateToProps, mapDispatchToProps)(CategorySelectBox)
