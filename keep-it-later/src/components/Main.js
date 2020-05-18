import React from 'react'

import { NavBar } from './NavBar'
import { ItemHandler } from './ItemHandler'

const Main = () => {
  return (
    <div>
      <NavBar appName='Keep it later!!!!' />
      <ItemHandler />
    </div>
  )
}

export default Main
