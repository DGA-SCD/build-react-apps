import React from 'react'
import { screen, render } from '@testing-library/react'

import { CategoryListPresentation } from '.'

describe('Category List', () => {
  test('shows 1 category item in list', () => {
    // arrange or setup or given
    const categories = [{ name: 'Personal', id: 1 }]

    // act or action or when
    render(<CategoryListPresentation categories={categories} />)

    // assert or assertion or then
    const categoryItems = screen.getAllByTestId('categoryItem')
    expect(categoryItems[0]).toHaveTextContent('Personal')
    expect(categoryItems.length).toBe(1)
  })

  test('shows 2 categories item in list', () => {
    // arrange or setup or given
    const categories = [
      { name: 'Personal', id: 1 },
      { name: 'Knowledge', id: 2 }
    ]

    // act or action or when
    render(<CategoryListPresentation categories={categories} />)

    // assert or assertion or then
    const categoryItems = screen.getAllByTestId('categoryItem')
    expect(categoryItems[0]).toHaveTextContent('Personal')
    expect(categoryItems[1]).toHaveTextContent('Knowledge')
    expect(categoryItems.length).toBe(2)
  })
})
