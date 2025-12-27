import { useState } from 'react'
import './App.css'

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');

  const renderizaResultado = () => {
    const imc = peso / (altura * altura);

    if (!peso || !altura) {
      return null;
    }

    if (imc < 18.5) {
      return (
        <p>Seu IMC é {imc.toFixed(2)}: <strong>Abaixo do peso</strong></p>
      )
    } else if (imc >= 18.5 && imc < 24.9) {
      return (
        <p>Seu IMC é {imc.toFixed(2)}: <strong>Peso Normal</strong></p>
      )
    } else if (imc >= 25 && imc < 29.9) {
      return (
        <p>Seu IMC é {imc.toFixed(2)}: <strong>Sobrepeso</strong></p>
      )
    } else if (imc >= 30 && imc < 39.9) {
      return (
        <p>Seu IMC é {imc.toFixed(2)}: <strong>Obesidade</strong></p>
      )
    } else {
      return (
        <p>Seu IMC é {imc.toFixed(2)}: <strong>Obesidade Grave</strong></p>
      )
    }
  }

  return (
    <div className="container">
      <h1>Calculadora de IMC</h1>
      <form>
        <div className="input-group">
          <label htmlFor="altura">Altura (ex: 1.75)</label>
          <input 
            type="number" 
            id="altura"
            placeholder="Metros" 
            onChange={evento => setAltura(parseFloat(evento.target.value))} 
          />
        </div>

        <div className="input-group">
          <label htmlFor="peso">Peso (ex: 80.5)</label>
          <input 
            type="number" 
            id="peso"
            placeholder="Quilos" 
            onChange={evento => setPeso(parseFloat(evento.target.value))} 
          />
        </div>
      </form>

      <div className="resultado">
        {renderizaResultado()}
      </div>
    </div>
  )
}

export default App