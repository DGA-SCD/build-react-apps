import React from 'react'

import { ConnectedNumberLeft } from './NumberLeft'
import { ConnectedPlusOneButton } from './PlusOneButton'
import { MinusOneButton } from './MinusOneButton'

export const CounterLeft = () => {
  return (
    <div class='col'>
      <ConnectedNumberLeft />
      <div>
        <ConnectedPlusOneButton />
        <MinusOneButton />
      </div>
    </div>
  )
}
