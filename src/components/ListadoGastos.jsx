import Gasto from "./Gasto"
const listadoGastos = ({gastos, setGastoEditar}) => {
  return (
    <div className="listado-gastos contenedor">
        <h2>{gastos.length ? "Gastos" : "Agrega un gasto"}</h2>
        {gastos.map(gasto => (
            <Gasto 
                key = {gasto.id}
                gasto = {gasto}
                setGastoEditar = {setGastoEditar}
            />
        ))}
    </div>
  )
}

export default listadoGastos