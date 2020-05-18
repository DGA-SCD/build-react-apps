import React from 'react'

export const ItemCreator = () => {
  return (
    <div className='row'>
      <div className='col-9'>
        <input
          type='text'
          placeholder='What URL do you wanna keep it for later?'
          className='form-control form-control-lg'
          name='url'
          value=''
        />
      </div>
      <div className='col form-group'>
        <select
          className='form-control form-control-lg custom-select'
          id='category'
          style={{ height: '45px' }}
        >
          <option value='Choose category' disabled=''>
            Choose category
          </option>
          <option value='1'>Knowledge</option>
          <option value='2'>Personal</option>
          <option value='3'>Lame Stuff</option>
        </select>
      </div>
      <div className='col'>
        <button type='button' className='btn btn-success btn-lg'>
          Add
        </button>
      </div>
    </div>
  )
}
