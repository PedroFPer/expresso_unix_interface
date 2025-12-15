import { useState, useEffect, useContext } from "react";
import ModalHeaderEditEmployees from "./ModalHeaderEditEmployees";
import ModalFormEditEmployees from "./ModalFormEditEmployees"
import { AdminContext } from "../../../../../infrastructure/context/AdminProvider";
import { validationsUtils } from "../../../../../infrastructure/utils/validationsUtils";
import "../styles/ModalEditEmployees.css"

export default function ModalEditEmployees({ openEditModal, handleToggleEditModal, selectedEmployee }) {
    const { employees, setEmployees } = useContext(AdminContext);

    const [editableEmployee, setEditableEmployee] = useState({
        id: "",
        name: "",
        email: "",
        role: "",
        password: "",
        status: ""
    })

    useEffect(() => {
        if (selectedEmployee) {
            setEditableEmployee({
                id: selectedEmployee.id,
                name: selectedEmployee.name,
                email: selectedEmployee.email,
                role: selectedEmployee.role,
                password: selectedEmployee.password,
                status: selectedEmployee.status
            });
        }
    }, [selectedEmployee]);


    const [errors, setErrors] = useState({
        role: "",
        status: ""
    });

    const validationMap = {
        role: "select",
        status: "select"
    };

    const handleInputChange = (attribute, value) => {
        const field = validationMap[attribute];

        setEditableEmployee(prev => ({
            ...prev,
            [attribute]: value
        }));

        const validation = validationsUtils.validateField(field, value);


        setErrors(prev => ({
            ...prev,
            [attribute]: validation.valid ? "" : validation.message
        }));
    };


    const handleEditEmployee = () => {
        const newErrors = {};

        Object.entries(validationMap).forEach(([attribute, field]) => {
            const validation =
                validationsUtils.validateField(field, editableEmployee[attribute]) ||
                { valid: false, message: "Campo inválido" };

            if (!validation.valid) {
                newErrors[attribute] = validation.message;
            }
        });

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) return;

        setEmployees(prev =>
            prev.map(employee =>
                employee.id === editableEmployee.id
                    ? { ...employee, ...editableEmployee }
                    : employee
            )
        );

        window.alert("Alterações Salvas!");
        handleToggleEditModal();
    };

    return (
        <aside className={`modal-edit-employees ${openEditModal ? "modal-edit-employees-show" : "modal-edit-employees-hidden"}`}>
            <ModalHeaderEditEmployees></ModalHeaderEditEmployees>
            <ModalFormEditEmployees
                handleInputChange={handleInputChange}
                handleEditEmployee={handleEditEmployee}
                editableEmployee={editableEmployee}
                errors={errors}>
            </ModalFormEditEmployees>
            <div id="group-button-edit-employees">
                <button id="cancel-button-edit-employees" onClick={handleToggleEditModal}>Cancelar</button>
                <button id="continue-button-edit-employees" onClick={handleEditEmployee} >Continuar</button>
            </div>
        </aside>
    );
}
