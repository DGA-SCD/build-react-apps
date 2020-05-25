import axios from 'axios'
import { createAction } from '@reduxjs/toolkit'

export const addItem = createAction('ADD_ITEM')
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

// axios.post(url, {url: 'xyz', category_id: null})
export const addItemViaAPI = () => {}

// Thunk มันคือ function ที่ถูก return จาก function
// function wrapper() {
//   return function thunk() {
//     console.log('hello')
//   }
// }
