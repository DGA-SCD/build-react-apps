import React from 'react'

import { StyledListItem } from './styled'

export const CategoryItem = ({ name, onRemoveClicked }) => (
  <StyledListItem onClick={onRemoveClicked}>{name}</StyledListItem>
)
