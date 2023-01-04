import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // let count = 0

  const add = () => {
    setCount(count + 1)
  }

  return (
    <div className='App'>
      <h1>Front Beginners</h1>
      <h3>{count}</h3>
      <button onClick={add}>adicionar</button>
    </div>
  )
}

export default App
