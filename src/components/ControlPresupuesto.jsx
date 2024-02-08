/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

const ControlPresupuesto = ({gastos, presupuesto, setGastos, setPresupuesto, setIsValidPresupuesto}) => {

  const [disponible, setDisponible] = useState(0)
  const [gastado, setGastado] = useState(0)
  const [porcentaje, setProcentaje] = useState(0)
  
  useEffect(() => {
    const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0)
    const totalDisponible = presupuesto - totalGastado

    const nuevoPorcentaje = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2)
    setProcentaje(nuevoPorcentaje)
    setDisponible(totalDisponible)
    setGastado(totalGastado)
  },[gastos, presupuesto])

  const formatearCantidad = (cantidad) => {
    return cantidad.toLocaleString("en-US",{
      style: "currency",
      currency: "USD"
    })
  }
  const handleResetApp = () => {
    const resultado = confirm("Deseas resetear la app?")
    if(resultado){
      setGastos([])
      setPresupuesto(0)
      setIsValidPresupuesto(false)
    }
  }

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
        <div>
            <CircularProgressbar
            text={`${porcentaje}% gastado`}
            styles={buildStyles({
              pathColor: porcentaje >= 100 ? "#ff4238" : porcentaje >= 65 ? "#ffd60a" : "#33d74b",
              trailColor: "#f5f5f5",
              textColor: porcentaje > 100 ? "#dc2626" : "#3b82f6"
            })}
            value={porcentaje}
            />
        </div>
        <div className="contenido-presupuesto">
          <button 
          className="reset-app" 
          type="button"
          onClick={handleResetApp}>
            Resetear app
          </button>
            <p>
                <span>Presupuesto: </span> {formatearCantidad(presupuesto)}
            </p>
            <p className={`${disponible < 0 ? "negativo" : ""}`}>
                <span>Disponible: </span> {formatearCantidad(disponible)}
            </p>
            <p>
                <span>Gastado: </span> {formatearCantidad(gastado)}
            </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto