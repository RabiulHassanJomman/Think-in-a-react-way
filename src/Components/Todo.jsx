import React, { useState } from 'react'

export default function Todo() {
  const [todo, setTodo] = useState('');
  const [warning, setWarning]   = useState(null);

  const handleInput = (e) => {
    const inputData = e.target.value;
    const updatedWarning = (inputData.includes(".js")) ? "You need JS Skill to complete the task" : null;

    setTodo(inputData);
    setWarning(updatedWarning)
  }

  return (
    <div>
      <p>{todo}</p>
      <textarea name="text" id="text" onChange={handleInput}></textarea>
      <h1>{warning}</h1>
    </div>
  )
}
