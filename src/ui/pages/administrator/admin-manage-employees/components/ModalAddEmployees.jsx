import { useState, useContext } from "react";
import ModalHeaderAddEmployees from "./ModalHeaderAddEmployees"
import ModalFormAddEmployees from "./ModalFormAddEmployees"
import { AdminContext } from "../../../../../infrastructure/context/AdminProvider";
import { validationsUtils } from "../../../../../infrastructure/utils/validationsUtils";
import "../styles/ModalAddEmployees.css"

export default function ModalAddEmployees({ openAddModal, handleToggleAddModal }) {
    const { employees, setEmployees } = useContext(AdminContext);

    const [employee, setEmployee] = useState({
        name: "",
        email: "",
        role: "",
        password: "",
        status: ""
    });

    const emptyEmployee = {
        name: "",
        email: "",
        role: "",
        password: "",
        status: ""
    };

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        role: ""
    });

    const validationMap = {
        name: "name",
        email: "email",
        role: "select"
    };

    const handleInputChange = (attribute, value) => {
        const field = validationMap[attribute];


        setEmployee(prev => ({
            ...prev,
            [attribute]: value
        }));

        const validation = validationsUtils.validateField(field, value);

        console.log(validation.message);

        setErrors(prev => ({
            ...prev,
            [attribute]: validation.valid ? "" : validation.message
        }));
    };

    const handleRegisterEmployee = () => {
        const newErrors = {};

        const finalEmployee = {
            ...employee,
            id: crypto.randomUUID(),
            password: "Senha@123",
            status: "Ativo"
        };


        Object.entries(validationMap).forEach(([attribute, field]) => {
            const validation =
                validationsUtils.validateField(field, finalEmployee[attribute]) ||
                { valid: false, message: "Campo inválido" };

            if (!validation.valid) {
                newErrors[attribute] = validation.message;
            }
        });

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) return;

        setEmployees(prev => [...prev, finalEmployee]);

        window.alert("Usuário cadastrado!");

        setEmployee(emptyEmployee);
        handleToggleAddModal();
    };

    return (
        <aside className={`modal-add-employees ${openAddModal ? "modal-add-employees-show" : "modal-add-employees-hidden"}`}>
            <ModalHeaderAddEmployees />

            <ModalFormAddEmployees
                handleInputChange={handleInputChange}
                handleRegisterEmployee={handleRegisterEmployee}
                employee={employee}
                errors={errors}
            />

            <div id="group-button-add-employees">
                <button id="cancel-button-add-employees" onClick={handleToggleAddModal}>Cancelar</button>
                <button id="continue-button-add-employees" onClick={handleRegisterEmployee}>Continuar</button>
            </div>
        </aside>
    );
}
