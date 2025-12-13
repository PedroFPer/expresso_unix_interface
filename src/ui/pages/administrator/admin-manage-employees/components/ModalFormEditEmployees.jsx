import { maskUtils } from "../../../../../infrastructure/utils/maskUtils"
import "../styles/ModalFormEditEmployees.css"

export default function ModalFormEditEmployees({
    handleInputChange,
    handleEditEmployee,
    editableEmployee,
    errors
}) {
    return (
        <form id="modal-form-edit-employees" onSubmit={handleEditEmployee}>

            <div className="input-row-full">
                <label>Nome do Funcionário*</label>
                <input
                    type="text"
                    value={editableEmployee.name}
                    disabled
                />
            </div>

            <div className="input-row-full">
                <label>Email do Funcionário*</label>
                <input
                    type="text"
                    value={editableEmployee.email}
                    disabled
                />
            </div>

            <div className="input-row-two-columns">
                <div className="item-row-two-columns">
                    <label>Cargo*</label>
                    <select
                        value={editableEmployee.role}
                        onChange={(e) => handleInputChange("role", e.target.value)}
                    >
                        <option value="">Selecione um cargo</option>
                        <option value="Adm">Adm</option>
                        <option value="Gestor">Gestor</option>
                        <option value="Motorista">Motorista</option>
                    </select>

                    <p className="input-error">
                        {errors.role || "\u00A0"}
                    </p>
                </div>


                <div className="item-row-two-columns">
                    <label>Status*</label>
                    <select
                        value={editableEmployee.status}
                        onChange={(e) => handleInputChange("status", e.target.value)}
                    >
                        <option value="">Selecione um status</option>
                        <option value="Ativo">Ativo</option>
                        <option value="Desligado">Desligado</option>
                        <option value="Férias">Férias</option>
                    </select>

                    <p className="input-error">
                        {errors.status || "\u00A0"}
                    </p>
                </div>

            </div>

        </form>
    );
}
