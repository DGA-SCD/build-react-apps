import React from 'react'

export const Item = (props) => (
  <div class='row m-2 py-2 border-bottom border-gray align-items-center d-flex justify-content-between'>
    <div class='col-10'>
      <a href={props.url} target='_blank' rel='noopener noreferrer'>
        {props.url}
      </a>
      <span class='ml-2 badge badge-info'>{props.categoryName}</span>
    </div>
    <div class='col'>
      <button class='btn btn-danger'>Remove</button>
    </div>
  </div>
)
