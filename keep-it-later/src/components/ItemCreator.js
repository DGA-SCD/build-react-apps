import React from 'react'

export const ItemCreator = ({
  url,
  onItemUrlChange,
  category_name,
  onCategoryChange,
  onAddClicked
}) => {
  return (
    <div className='row'>
      <div className='col-9'>
        <input
          type='text'
          placeholder='What URL do you wanna keep it for later?'
          className='form-control form-control-lg'
          name='url'
          value={url}
          onChange={onItemUrlChange}
        />
      </div>
      <div className='col form-group'>
        <select
          className='form-control form-control-lg custom-select'
          id='category'
          style={{ height: '45px' }}
          onChange={onCategoryChange}
          value={category_name}
        >
          <option value='Choose category' disabled=''>
            Choose category
          </option>
          <option value='Knowledge'>Knowledge</option>
          <option value='Personal'>Personal</option>
          <option value='Lame Stuff'>Lame Stuff</option>
        </select>
      </div>
      <div className='col'>
        <button type='button' className='btn btn-success btn-lg' onClick={onAddClicked}>
          Add
        </button>
      </div>
    </div>
  )
}
