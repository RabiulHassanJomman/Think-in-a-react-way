import React, { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>Increment 1</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>Decrement 1</button>
    </div>
  )
}
