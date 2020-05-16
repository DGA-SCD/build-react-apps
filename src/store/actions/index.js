import axios from 'axios'
import { createAction } from '@reduxjs/toolkit'

export const addNewItem = createAction('ADD_NEW_ITEM')

export const addNewItemAsync = (item) => {
  return (dispatch) => {
    axios
      .post('/items', {
        url: item.textInput,
        category_id: parseInt(item.categoryId)
      })
      .then((response) => {
        const newItem = response.data
        console.log(newItem)
        dispatch(addNewItem({ textInput: newItem.url, categoryName: newItem.category_name }))
      })
  }
}

export const fetchItemsPending = createAction('FETCH_ITEMS_PENDING')
export const fetchItemsSuccess = createAction('FETCH_ITEMS_SUCCESS')

export const fetchItems = () => {
  return (dispatch) => {
    dispatch(fetchItemsPending())
    setTimeout(() => {
      axios.get('/items').then((response) => {
        const itemsFromAPI = response.data
        const allItems = itemsFromAPI.map((item) => {
          return {
            textInput: item.url,
            categoryName: item.category_name
          }
        })
        dispatch(fetchItemsSuccess(allItems))
      })
    }, 1000)
  }
}

export const deleteItem = createAction('DELETE_ITEM')

export const deleteTaskAsync = (id) => {
  return (dispatch) => {
    axios.delete(`/items/${id}`)
    dispatch(deleteItem(id))
  }
}

export const storeTextInput = createAction('STORE_TEXT_INPUT')

export const storeCategoryId = createAction('STORE_CATEGORY_ID')
