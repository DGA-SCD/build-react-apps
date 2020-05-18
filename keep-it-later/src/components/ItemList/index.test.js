import React from 'react'
import { screen, render } from '@testing-library/react'

import { ItemList } from '.'

test('shows items correctly', () => {
  const items = [
    { itemUrl: 'www.google.com', category: 'Knowledge' },
    { itemUrl: 'www.youtube.com', category: 'Entertainment' }
  ]
  render(<ItemList items={items} />)

  const urls = screen.getAllByTestId('itemUrl')
  expect(urls.length).toBe(2)
  expect(urls[0]).toHaveTextContent('www.google.com')
  expect(urls[1]).toHaveTextContent('www.youtube.com')

  const categories = screen.getAllByTestId('itemCategory')
  expect(categories.length).toBe(2)
  expect(categories[0]).toHaveTextContent('Knowledge')
  expect(categories[1]).toHaveTextContent('Entertainment')
})
