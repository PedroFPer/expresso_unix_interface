import "../styles/ModalEditEmployees.css"

export default function ModalEditEmployees({ openEditModal, handleToggleEditModal, selectedEmployee }) {
    console.log(selectedEmployee)
    
    return (
        <aside className={`modal-edit-employees ${openEditModal ? "modal-edit-employees-show" : "modal-edit-employees-hidden"}`}>

        </aside>
    );
}
