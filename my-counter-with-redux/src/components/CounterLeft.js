import React from 'react'

import { ConnectedNumberLeft } from './NumberLeft'
import { ConnectedPlusOneButton } from './PlusOneButton'
import { ConnectedMinusOneButton } from './MinusOneButton'

export const CounterLeft = () => {
  return (
    <div class='col'>
      <ConnectedNumberLeft />
      <div>
        <ConnectedPlusOneButton />
        <ConnectedMinusOneButton />
      </div>
    </div>
  )
}
