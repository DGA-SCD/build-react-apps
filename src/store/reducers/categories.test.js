import { reducer } from './categories'

describe('categories reducer', () => {
  it('should return an initial state', () => {
    expect(reducer(undefined, {})).toEqual({ categoryId: 0 })
  })

  it('should store category ID', () => {
    expect(reducer(undefined, { type: 'STORE_CATEGORY_ID', payload: 1 })).toEqual({ categoryId: 1 })
  })
})
