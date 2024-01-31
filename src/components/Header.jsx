import NuevoPresupuesto from "./NuevoPresupuesto"
import ControlPresupuesto from "./ControlPresupuesto"
// eslint-disable-next-line react/prop-types
const Header = ({presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto}) => {
  return (
    <header>
      <h1>Planificador de gastos</h1>
      {isValidPresupuesto ? 
      (
      <ControlPresupuesto
        presupuesto = {presupuesto}
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