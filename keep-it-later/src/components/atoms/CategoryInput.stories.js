import React from 'react'

import { CategoryInput } from './CategoryInput'

export default {
  component: CategoryInput,
  title: 'CategoryInput'
}

export const EmptyInput = () => <CategoryInput />

export const NewInput = () => <CategoryInput category={'New category'} />
