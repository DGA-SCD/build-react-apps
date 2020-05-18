import React from 'react'

export const ItemList = () => {
  return (
    <div className='col'>
      <div className='row m-2 py-2 border-bottom border-gray align-items-center d-flex justify-content-between'>
        <div className='col-10'>
          <a
            href='https://github.com/django-dbbackup/django-dbbackup'
            target='_blank'
            rel='noopener noreferrer'
          >
            https://github.com/django-dbbackup/django-dbbackup
          </a>
          <span className='ml-2 badge badge-info'></span>
        </div>
        <div className='col'>
          <button className='btn btn-danger'>Remove</button>
        </div>
      </div>
      <div className='row m-2 py-2 border-bottom border-gray align-items-center d-flex justify-content-between'>
        <div className='col-10'>
          <a
            href='https://medium.com/@etherealm/named-export-vs-default-export-in-es6-affb483a0910'
            target='_blank'
            rel='noopener noreferrer'
          >
            https://medium.com/@etherealm/named-export-vs-default-export-in-es6-affb483a0910
          </a>
          <span className='ml-2 badge badge-info'>Knowledge</span>
        </div>
        <div className='col'>
          <button className='btn btn-danger'>Remove</button>
        </div>
      </div>
    </div>
  )
}
