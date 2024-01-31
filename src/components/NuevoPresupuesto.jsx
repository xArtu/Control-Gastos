import { useState } from "react"
import Mensaje from "./Mensaje"

// eslint-disable-next-line react/prop-types
const NuevoPresupuesto = ({presupuesto, setPresupuesto, setIsValidPresupuesto}) => {

  const [mensaje, setMensaje] = useState("")

  const handlePresupuesto = (e) => {
    e.preventDefault()
    if(!presupuesto || presupuesto < 0){
      setMensaje("No es un presupuesto valido")
      return
    }

    setMensaje("")
    setIsValidPresupuesto(true)

  }

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form 
      className="formulario"
      onSubmit={handlePresupuesto}
      >
        <div className="campo">
          <label htmlFor="definir">Definir presupuesto</label>
          <input 
          type="number"
          name="definir" 
          id="definir"
          placeholder="Ingresa el presupuesto" 
          className="nuevo-presupuesto"
          value={presupuesto}
          onChange={e => setPresupuesto(Number(e.target.value))}
          />
        </div>
        <input 
        type="submit" 
        value="Agregar"/>
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
      </form>
    </div>
  )
}

export default NuevoPresupuesto