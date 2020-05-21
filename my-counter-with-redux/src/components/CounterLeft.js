import React from 'react'

import { NumberLeft } from './NumberLeft'
import { PlusOneButton } from './PlusOneButton'
import { MinusOneButton } from './MinusOneButton'

export const CounterLeft = () => {
  return (
    <div class='col'>
      <NumberLeft />
      <div>
        <PlusOneButton />
        <MinusOneButton />
      </div>
    </div>
  )
}
