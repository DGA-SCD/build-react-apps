import React from 'react'

export const ItemList = ({ items }) => {
  return (
    <div className='col'>
      {items.map((item) => {
        return (
          <div className='row m-2 py-2 border-bottom border-gray align-items-center d-flex justify-content-between'>
            <div className='col-10'>
              <a href={item.itemUrl} target='_blank' rel='noopener noreferrer'>
                {item.itemUrl}
              </a>
              <span className='ml-2 badge badge-info'>{item.category}</span>
            </div>
            <div className='col'>
              <button className='btn btn-danger'>Remove</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}
