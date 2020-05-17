import React from 'react'
import { connect } from 'react-redux'

import { deleteTaskAsync } from '../../../store/actions'

const Item = (props) => (
  <div class='row m-2 py-2 border-bottom border-gray align-items-center d-flex justify-content-between'>
    <div class='col-10'>
      <a href={props.url} target='_blank' rel='noopener noreferrer'>
        {props.url}
      </a>
      <span class='ml-2 badge badge-info'>{props.categoryName}</span>
    </div>
    <div class='col'>
      <button class='btn btn-danger' onClick={() => props.deleteTaskAsync(props.itemId)}>
        Remove
      </button>
    </div>
  </div>
)

const mapDispatchToProps = {
  deleteTaskAsync
}

export const ConnectedItem = connect(null, mapDispatchToProps)(Item)
