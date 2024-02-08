import Gasto from "./Gasto"
const listadoGastos = ({gastos, setGastoEditar, eliminarGasto, filtro, gastosFiltrados}) => {
  return (
    <div className="listado-gastos contenedor">
        {filtro ? (
          <>
          <h2>{gastosFiltrados.length ? "Gastos" : "No hay gasto de esta categoria"}</h2>
          {gastosFiltrados.map(gasto => (
            <Gasto 
                key = {gasto.id}
                gasto = {gasto}
                setGastoEditar = {setGastoEditar}
                eliminarGasto = {eliminarGasto}
            />
          ))}
        </>
        ):(
            <>
            <h2>{gastos.length ? "Gastos" : "Aun no hay gastos"}</h2>
              {gastos.map(gasto => (
                  <Gasto 
                      key = {gasto.id}
                      gasto = {gasto}
                      setGastoEditar = {setGastoEditar}
                      eliminarGasto = {eliminarGasto}
                  />
              ))}
            </>
          )
        }
    </div>
  )
}

export default listadoGastos