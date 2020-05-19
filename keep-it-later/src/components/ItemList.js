import React from 'react'

export const ItemList = ({ items }) => {
  console.log(items)
  return (
    <div className='col'>
      {items.map((item, id) => {
        return (
          <div
            // pitfull: key={id}
            key={item.id}
            className='row m-2 py-2 border-bottom border-gray align-items-center d-flex justify-content-between'
          >
            <div className='col-10'>
              <a href={item.url} target='_blank' rel='noopener noreferrer'>
                {item.url}
              </a>
              <span className='ml-2 badge badge-info'>{item.category_name}</span>
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
