import React from 'react'

export const ItemList = () => {
  return (
    <div className='col'>
      <div class='row m-2 py-2 border-bottom border-gray align-items-center d-flex justify-content-between'>
        <div class='col-10'>
          <span>Attend yoga class Test</span>
          <span class='ml-2 badge badge-info'>Workout</span>
        </div>
        <div class='col'>
          <button class='btn btn-danger'>Remove</button>
        </div>
      </div>
    </div>
  )
}
