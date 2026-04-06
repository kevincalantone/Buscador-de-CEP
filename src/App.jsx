import { useState } from 'react'
import {FiSearch} from 'react-icons/fi'
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

            <button className='buttonSearch'>
                <FiSearch size={25} color='#fff'/>
            </button>
        </div>
        <main className="main">
          <h2>CEP: 7900088</h2>

          <span>Rua teste</span>
          <span>Complemento: Algum complemento</span>
          <span>Vila Rosa</span>
          <span>Campo Grande - MS</span>
        </main>
    </div>
  )
}

export default App
