import Gasto from "./Gasto"
const listadoGastos = ({gastos}) => {
  return (
    <div className="listado-gastos contenedor">
        <h2>{gastos.length ? "Gastos" : "Agrega un gasto"}</h2>
        {gastos.map(gasto => (
            <Gasto 
                key = {gasto.id}
                gasto = {gasto}
            />
        ))}
    </div>
  )
}

export default listadoGastos