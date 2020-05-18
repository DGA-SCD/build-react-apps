import React from 'react'
import { screen, render } from '@testing-library/react'

import { CategoryFilterBox } from '.'

test('shows categories in filter box', () => {
  render(<CategoryFilterBox />)

  expect(screen.getByText('Categories')).toBeInTheDocument()
})
