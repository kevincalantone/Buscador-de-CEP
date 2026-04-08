import { useState } from 'react'
import {FiSearch} from 'react-icons/fi'
import "./style.css"

import api from './services/api'

function App() {
  const [input, setInput] = useState("")

    async function handleSearch(){
        // 01001000/json/
        if(input === ""){
          alert("Digite um CEP")
          return
        }
        try{
            const response = await api.get(`${input}/json`)
            console.log(response.data)
        }
        catch{
          alert("Erro ao buscar")
          setInput("")
        }
    }

  return (
    <div className='container'>
        <h1 className='title'>Buscador CEP</h1>
       
        <div className="containerInput">
            <input 
            type="text" 
            placeholder='Digite seu cep...'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            />

            <button className='buttonSearch' onClick={handleSearch}>
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
