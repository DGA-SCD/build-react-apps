import axios from 'axios'
import { createAction } from '@reduxjs/toolkit'

export const deleteItem = createAction('DELETE_ITEM')

const fetchItems = createAction('FETCH_ITEMS')
export const fetchItemsFromAPI = () => {
  return (dispatch) => {
    axios.get('http://localhost:8000/items').then((response) => {
      const data = response.data
      console.log(data)
      dispatch(fetchItems(data))
    })
  }
}

const addItem = createAction('ADD_ITEM')
export const addItemViaAPI = (item) => {
  return (dispatch) => {
    axios
      .post('http://localhost:8000/items', {
        url: item.url
      })
      .then((response) => {
        const data = response.data
        const newItem = {
          id: data.id,
          url: data.url
        }
        dispatch(addItem(newItem))
      })
  }
}

// Thunk มันคือ function ที่ถูก return จาก function
// function wrapper() {
//   return function thunk() {
//     console.log('hello')
//   }
// }
