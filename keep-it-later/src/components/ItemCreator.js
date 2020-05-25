import React from 'react'
import { connect } from 'react-redux'

import { addItemViaAPI } from '../store/action'

export const ItemCreator = ({
  url,
  onItemUrlChange,
  category_name,
  onCategoryChange,
  onAddClicked,
  addItemViaAPIMapped
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
        <button
          type='button'
          className='btn btn-success btn-lg'
          onClick={() => addItemViaAPIMapped({ id: url, url: url, category_name: category_name })}
        >
          Add
        </button>
      </div>
    </div>
  )
}

// state = {
//   url: '',
//   category_name: '',
// }

// const mapStateToProps = (state) => {
//   return {
//     abc: state.abc
//   }
// }

const mapDispatchToProps = {
  addItemViaAPIMapped: addItemViaAPI
}

// export const ConnectedItemCreator = connect(mapStateToProps, mapDispatchToProps)(ItemCreator)

const c = connect(null, mapDispatchToProps)
export const ConnectedItemCreator = c(ItemCreator)

// function add(a, b) {
//   return a + b
// }

// function add3(a) {
//   return add(a, 3)
// }

// add3(5) // 8
