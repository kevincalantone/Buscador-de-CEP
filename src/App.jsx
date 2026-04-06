import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
        <h1 className='title'>Buscador CEP</h1>
       
        <div className="containerInput">
            <input 
            type="text" 
            placeholder='Digite seu cep...'
            />
        </div>
    </div>
  )
}

export default App
