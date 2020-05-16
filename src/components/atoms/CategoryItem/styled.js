import styled from 'styled-components'

export const StyledListItem = styled.li`
  display: inline-block;
  margin: 0.25em;
  padding: 0.5em 1em;
  border: 1px solid #343a40;
  border-radius: 0.25em;

  &:hover {
    color: red;
    border: 1px solid red;
    content: 'Remove';
    cursor: pointer;
    font-weight: bold;
    &::after {
      padding-left: 0.7em;
      content: '🅧';
    }
  }
`
