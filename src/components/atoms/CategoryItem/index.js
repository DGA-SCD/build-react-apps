import React from 'react'
import styled from 'styled-components'

const StyledListItem = styled.li`
  display: inline-block;
  margin: 0.25em;
  padding: 0.5em 1em;
  border: 1px solid #343a40;
  border-radius: 0.25em;
`

export const CategoryItem = (props) => <StyledListItem>{props.name}</StyledListItem>
