import axios from 'axios'
import { createAction } from '@reduxjs/toolkit'

export const addNewItem = createAction('ADD_NEW_ITEM')

export const addNewItemAsync = (item) => {
  return (dispatch) => {
    axios.post('/items', {
      url: item.textInput,
      category_id: parseInt(item.categoryId)
    })
    dispatch(addNewItem(item))
  }
}

export const fetchItemsPending = createAction('FETCH_ITEMS_PENDING')
export const fetchItemsSuccess = createAction('FETCH_ITEMS_SUCCESS')

export const fetchItems = () => {
  return (dispatch) => {
    dispatch(fetchItemsPending())
    console.log('hhhhhhh')
    setTimeout(() => {
      axios.get('/tasks').then((response) => {
        const tasksFromAPI = response.data
        const allItems = tasksFromAPI.map((item) => {
          return {
            url: item.url,
            categoryName: item.category_id
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
