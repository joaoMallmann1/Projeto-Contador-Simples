import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  const incrementar = () => {
    setCount(count + 1);
  }

  const decrementar = () => {
    setCount(count - 1);
  }

  return (
      <div>
        <h1>Contador - React</h1>
        <p className='value'>Valor : <span>{count}</span></p>
        <button onClick={incrementar}>Incrementar</button>
        <button onClick={decrementar}>Decrementar</button>
      </div>
  )
}

export default App
