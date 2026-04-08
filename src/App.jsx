import { useState } from 'react'
import {FiSearch} from 'react-icons/fi'
import "./style.css"

import api from './services/api'

function App() {
  const [input, setInput] = useState("")
  const [cep, setCep] = useState()

    async function handleSearch(){
        // 01001000/json/
        if(input === ""){
          alert("Digite um CEP")
          return
        }
        try{
            const response = await api.get(`${input}/json`)
           setCep(response.data)
           setInput("")
        }
        catch{
          alert("Este cep")
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
          {/* Verificamos se o objeto cep possui chaves (ou seja, se não está vazio) */}
        {Object.keys(cep || {}).length > 0 && (
          <main className="main">
              <h2>CEP: {cep.cep}</h2>

              <span>Logradouro: {cep.logradouro}</span>
              <span>Bairro: {cep.bairro}</span>
              <span>Localidade: {cep.localidade} - {cep.uf}</span>
              <span>Região: {cep.regiao}</span>
          </main>
        )}
    </div>
  )
}

export default App
