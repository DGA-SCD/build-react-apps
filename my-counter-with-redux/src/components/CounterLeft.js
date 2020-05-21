import React from 'react'

import { NumberLeft } from './NumberLeft'
import { ConnectedPlusOneButton } from './PlusOneButton'
import { MinusOneButton } from './MinusOneButton'

export const CounterLeft = () => {
  return (
    <div class='col'>
      <NumberLeft />
      <div>
        <ConnectedPlusOneButton />
        <MinusOneButton />
      </div>
    </div>
  )
}
