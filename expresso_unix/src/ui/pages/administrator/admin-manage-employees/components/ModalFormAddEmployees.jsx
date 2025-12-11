import { maskUtils } from "../../../../../infrastructure/utils/maskUtils"
import "../styles/ModalFormAddEmployees.css"

export default function ModalFormAddEmployees({ handleInputChange, registerEmployee, employee, errors }) {
    return (
        <form id="modal-form-add-employees" onSubmit={registerEmployee}>

            <div className="input-row-full">
                <label>Nome do Funcionário*</label>
                <input
                    type="text"
                    placeholder="Exemplo: Lucas da Silva"
                    value={maskUtils.limitText(employee.name)}
                    onChange={(e) =>
                        handleInputChange("name", e.target.value)
                    }
                />
                <p className="input-error">
                    {errors.name || "\u00A0"}
                </p>
            </div>

            <div className="input-row-full">
                <label>Email do Funcionário*</label>
                <input
                    type="text"
                    placeholder="Exemplo: Nome@email.com"
                    value={maskUtils.limitText(employee.email)}
                    onChange={(e) =>
                        handleInputChange("email", e.target.value)
                    }
                />
                <p className="input-error">
                    {errors.email || "\u00A0"}
                </p>
            </div>


            <div className="input-row-two-columns">
                <div className="item-row-two-columns">
                    <label>Cargo*</label>
                    <select
                        value={employee.role}
                        onChange={(e) =>
                            handleInputChange("role", e.target.value)
                        }
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
            </div>


            <div className="input-row-full">
                <label>Senha</label>
                <input
                    type="text"
                    placeholder="Senh@123"
                    disabled
                />
                <p className="message-input">
                    Esta é a senha inicial do funcionário. No primeiro acesso,
                    ele precisará criar uma nova senha.
                </p>
            </div>
        </form>
    )
}
