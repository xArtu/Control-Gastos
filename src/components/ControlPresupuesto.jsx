/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"

const ControlPresupuesto = ({gastos, presupuesto}) => {

  const [disponible, setDisponible] = useState(0)
  const [gastado, setGastado] = useState(0)
  
  useEffect(() => {
    const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0)
    const totalDisponible = presupuesto - totalGastado
    setDisponible(totalDisponible)
    setGastado(totalGastado)
  },[gastos])

  const formatearCantidad = (cantidad) => {
    return cantidad.toLocaleString("en-US",{
      style: "currency",
      currency: "USD"
    })
  }

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
        <div>
            <p>Aqui va la grafica</p>
        </div>
        <div className="contenido-presupuesto">
            <p>
                <span>Presupuesto: </span> {formatearCantidad(presupuesto)}
            </p>
            <p>
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