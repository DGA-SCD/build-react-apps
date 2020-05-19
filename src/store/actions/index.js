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
        dispatch(
          addNewItem({
            itemId: newItem.id,
            textInput: newItem.url,
            categoryId: newItem.category_id.String,
            categoryName: newItem.category_name.String
          })
        )
      })
  }
}

export const fetchItemsPending = createAction('FETCH_ITEMS_PENDING')

export const fetchItemsSuccess = createAction('FETCH_ITEMS_SUCCESS')

export const fetchItems = (categoryId) => {
  return (dispatch) => {
    dispatch(fetchItemsPending())
    let url = '/items'
    if (categoryId) {
      url = `${url}?category=${categoryId}`
    }
    return axios.get(url).then((response) => {
      const itemsFromAPI = response.data
      const allItems = itemsFromAPI.map((item) => {
        return {
          id: item.id,
          textInput: item.url,
          categoryId: item.category_id,
          categoryName: item.category_name
        }
      })
      dispatch(fetchItemsSuccess(allItems))
    })
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
