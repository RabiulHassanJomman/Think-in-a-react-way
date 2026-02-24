import React, { useContext } from 'react'
import { counterContext } from '../App'

export default function ComponentC() {
  const countContext = useContext(counterContext)
  return (
    <div>
      <h3>ComponentC</h3>

      <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
      <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
    </div>
  )
}
