import React from 'react'
import { useContext } from 'react'
import { Appstate } from '../../../App'
const ComC = () => {
    const Appdata = useContext(Appstate)
  return (
    <div>
      <h1>ComC</h1>
      <h1>{Appdata}</h1>
    </div>
  )
}

export default ComC
