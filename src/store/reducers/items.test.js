import axios from 'axios'

import { reducer } from './items'

describe('items reducer', () => {
  it('should return an initial state', () => {
    expect(reducer(undefined, {})).toEqual({ allItems: [], loading: false })
  })

  it('should fetch data successfully from API', async () => {
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
})
