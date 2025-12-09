import ModalHeaderAddEmployees from "./ModalHeaderAddEmployees"
import ModalFormAddEmployees from "./ModalFormAddEmployees"
import "../styles/ModalAddEmployees.css"

export default function ModalAddEmployees({ openModal }) {

    return (
        <aside className={`modal-add-employees ${openModal ? "modal-add-employees-show" : "modal-add-employees-hidden"}`}>
            <ModalHeaderAddEmployees ></ModalHeaderAddEmployees>

           <ModalFormAddEmployees></ModalFormAddEmployees>

            <div id="group-button-add-employees">
                <button id="cancel-button-add-employees">Cancelar</button>
                <button id="continue-button-add-employees">Continuar</button>
        
            </div>
        </aside>
    )
}