import React from 'react'

import { StyledListItem } from './styled'

export const CategoryItem = (props) => (
  <StyledListItem onClick={() => console.log('helloworld')}>{props.name}</StyledListItem>
)
