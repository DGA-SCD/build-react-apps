import axios from 'axios'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { reducer } from './items'
import { fetchItems } from '../actions'

jest.mock('axios')

axios.defaults.baseURL = 'http://localhost:8000'
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('items reducer', () => {
  it('should return an initial state', () => {
    expect(reducer(undefined, {})).toEqual({ allItems: [], loading: false })
  })

  it('should pass data to store correctly', () => {
    const payload = [
      {
        id: 1,
        textInput: 'http://localhost',
        categoryId: 1,
        categoryName: 'Test'
      },
      {
        id: 2,
        textInput: 'https://www.google.com',
        categoryId: 1,
        categoryName: 'Test'
      }
    ]

    expect(
      reducer(
        {
          allItems: [],
          loading: false
        },
        {
          type: 'FETCH_ITEMS_SUCCESS',
          payload
        }
      )
    ).toEqual({ allItems: [...payload], loading: false })
  })

  it('should fetch data successfully from API', () => {
    const payload = [
      {
        id: 1,
        textInput: 'http://localhost',
        categoryId: 1,
        categoryName: 'My Machine'
      },
      {
        id: 2,
        textInput: 'https://www.google.com',
        categoryId: 1,
        categoryName: 'Search Engine'
      }
    ]

    const response = {
      data: [
        {
          id: 1,
          url: 'http://localhost',
          category_id: 1,
          category_name: 'My Machine'
        },
        {
          id: 2,
          url: 'https://www.google.com',
          category_id: 1,
          category_name: 'Search Engine'
        }
      ]
    }
    axios.get.mockImplementationOnce(() => Promise.resolve(response))

    const expectedActions = [
      { type: 'FETCH_ITEMS_PENDING', payload: undefined },
      { type: 'FETCH_ITEMS_SUCCESS', payload }
    ]
    const store = mockStore({ todos: [] })
    return store.dispatch(fetchItems()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
