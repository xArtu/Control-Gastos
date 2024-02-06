import { useState, useEffect } from 'react'
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
  const [gastoEditar, setGastoEditar] = useState({})

  useEffect(() => {
    if(Object.keys(gastoEditar).length > 0){
          setModal(true)
          setTimeout(() => {
            setAnimarModal(true)
          }, 200);
        }
  }, [gastoEditar])

  const handleNuevoGasto = () => {
    setModal(true)
    setGastoEditar({})
    setTimeout(() => {
      setAnimarModal(true)
    }, 200);
  }

  const guardarGasto = gasto => {
    gasto.id = generarID()
    gasto.fecha = Date.now()
    setGastos([...gastos, gasto])
  }

  return (
    <div className={modal ? "fijar" : ""}>
      <Header 
        gastos = {gastos}
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
              setGastoEditar = {setGastoEditar}
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
        guardarGasto = {guardarGasto}
        gastoEditar = {gastoEditar}
        />}

    </div>
  )

}

export default App
