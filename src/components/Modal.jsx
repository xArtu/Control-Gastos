/* eslint-disable react/prop-types */
import { useState, useEffect } from "react"
import Mensaje from "./Mensaje"
import CerrarBtn from "../img/cerrar.svg"
const Modal = ({setModal, animarModal, setAnimarModal, guardarGasto, gastoEditar, setGastoEditar}) => {

    const [mensaje, setMensaje] = useState("")
    const [nombre, setNombre] = useState("")
    const [cantidad, setCantidad] = useState("")
    const [categoria, setCategoria] = useState("")
    const [id, setId] = useState("")
    const [fecha, setFecha] = useState("")

    useEffect(() => {
        if(Object.keys(gastoEditar).length > 0){
            setNombre(gastoEditar.nombre)
            setCantidad(gastoEditar.cantidad)
            setCategoria(gastoEditar.categoria)
            setId(gastoEditar.id)
            setFecha(gastoEditar.fecha)
          }
    }, [gastoEditar])

    const ocultarModal = () => {
        setAnimarModal(false)
        setGastoEditar({})
        setTimeout(() => {  
            setModal(false)
        }, 200);
    }

    const handleSubmit = e => {
        e.preventDefault()

        if([nombre, cantidad, categoria].includes("")){
            setMensaje("Todos los campos son obligatorios")
            setTimeout(() => {
                setMensaje("")
            }, 2000);
            return
        }
        guardarGasto({nombre, cantidad, categoria, id, fecha})
        ocultarModal()
    }

    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img 
                src={CerrarBtn} 
                alt="Boton para cerrar modal"
                onClick={ocultarModal} 
                />
            </div>
            <form 
            onSubmit={handleSubmit}
            className={`formulario ${animarModal ? "animar" : "cerrar"}`}>
                <legend>{gastoEditar.nombre ? "Editar gasto" : "Agregar gasto"}</legend>
                {mensaje 
                && 
                <Mensaje tipo="error">
                    {mensaje}
                </Mensaje>}
                <div className="campo">
                    <label htmlFor="nombre">Gasto</label>
                    <input 
                    id="nombre"
                    type="text"
                    placeholder="Añade el nombre del gasto"
                    value={nombre}
                    onChange={ e => setNombre(e.target.value)}
                    />
                </div>
                <div className="campo">
                    <label htmlFor="cantidad">Cantidad</label>
                    <input 
                    id="cantidad"
                    type="number"
                    placeholder="Añade la cantidad"
                    value={cantidad}
                    onChange={ e => setCantidad(Number(e.target.value))}
                    />
                </div>
                <div className="campo">
                    <label htmlFor="categoria">Categoría</label>
                    <select 
                    id="categoria"
                    value={categoria}
                    onChange={ e => setCategoria(e.target.value)}
                    >
                        <option value="">--Seleccione--</option>
                        <option value="ahorro" >Ahorro</option>
                        <option value="comida" >Comida</option>
                        <option value="casa" >Casa</option>
                        <option value="varios" >Varios</option>
                        <option value="ocio" >Ocio</option>
                        <option value="salud" >Salud</option>
                        <option value="suscripciones" >Suscripciones</option>
                    </select>
                </div>
                <input 
                type="submit"
                value={gastoEditar.nombre ? "Editar gasto" : "Agregar gasto"}
                />
            </form>
        </div>
    )
}

export default Modal