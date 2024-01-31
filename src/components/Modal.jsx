/* eslint-disable react/prop-types */
import CerrarBtn from "../img/cerrar.svg"
const Modal = ({setModal, animarModal, setAnimarModal}) => {

    const ocultarModal = () => {
        setAnimarModal(false)
        setTimeout(() => {  
            setModal(false)
        }, 200);
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
            <form className={`formulario ${animarModal ? "animar" : "cerrar"}`}>
                <legend>Nuevo gasto</legend>
            </form>
        </div>
    )
}

export default Modal