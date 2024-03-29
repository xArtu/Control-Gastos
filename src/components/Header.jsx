import NuevoPresupuesto from "./NuevoPresupuesto"
import ControlPresupuesto from "./ControlPresupuesto"
// eslint-disable-next-line react/prop-types
const Header = ({presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto, gastos, setGastos}) => {
  return (
    <header>
      <h1>Planificador de gastos</h1>
      {isValidPresupuesto ? 
      (
      <ControlPresupuesto
        presupuesto = {presupuesto}
        gastos = {gastos}
        setGastos = {setGastos}
        setPresupuesto = {setPresupuesto}
        setIsValidPresupuesto = {setIsValidPresupuesto}
      />
      )
      :
      (
        <NuevoPresupuesto
        presupuesto = {presupuesto}
        setPresupuesto = {setPresupuesto}
        setIsValidPresupuesto = {setIsValidPresupuesto}
        />
      )
      }

    </header>
  )
}

export default Header