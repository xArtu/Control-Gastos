import { useState } from 'react'
import Header from "./components/Header"
import Modal from "./components/Modal"
import ListadoGastos from './components/listadoGastos'
import {generarID} from "./helpers"
import IconoNuevoGasto from "./img/nuevo-gasto.svg"

function App() {

  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)
  const [gastos, setGastos] = useState([])

  const handleNuevoGasto = () => {
    setModal(true)
    setTimeout(() => {
      setAnimarModal(true)
    }, 200);
  }

  const guardarGasto = gasto => {
    gasto.id = generarID()
    setGastos([...gastos, gasto])
  }

  return (
    <div>
      <Header 
        presupuesto = {presupuesto}
        setPresupuesto = {setPresupuesto}
        isValidPresupuesto = {isValidPresupuesto}
        setIsValidPresupuesto = {setIsValidPresupuesto}
      />

      {isValidPresupuesto ? (
        <>
          <main>
            <ListadoGastos
              gastos = {gastos}
            />
          </main>
          <div className='nuevo-gasto'>
            <img 
            src={IconoNuevoGasto}
            alt="Icono nuevo gasto"
            onClick={handleNuevoGasto}
            />
          </div>
        </>
      ) : null}

        {modal 
        && 
        <Modal
        setModal = {setModal}
        animarModal = {animarModal}
        setAnimarModal = {setAnimarModal}
        guardarGasto={guardarGasto}
        />}

    </div>
  )

}

export default App
