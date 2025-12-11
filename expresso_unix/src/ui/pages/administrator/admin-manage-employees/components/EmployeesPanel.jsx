import { useState, useContext } from "react";
import { AdminContext } from "../../../../../infrastructure/context/AdminProvider";
import "../styles/EmployeesPanel.css";

export default function EmployeesPanel({ handleToggleAddModal, handleToggleEditModal }) {
    const { employees } = useContext(AdminContext);


    const [tempName, setTempName] = useState("");
    const [tempRole, setTempRole] = useState("");
    const [tempStatus, setTempStatus] = useState("");

    const [searchName, setSearchName] = useState("");
    const [searchRole, setSearchRole] = useState("");
    const [searchStatus, setSearchStatus] = useState("");



    const filteredEmployees = employees.filter(emp =>
        emp.name.toLowerCase().startsWith(searchName.toLowerCase()) &&
        (searchRole === "" || emp.role === searchRole) &&
        (searchStatus === "" || emp.status === searchStatus)
    );


    const handleSubmit = (e) => {
        e.preventDefault();

        setSearchName(tempName);
        setSearchRole(tempRole);
        setSearchStatus(tempStatus);
    };

    return (
        <div id="employees-panel">
            <div id="header-employees-panel">
                <h3>Funcionários</h3>
                <button onClick={handleToggleAddModal} >Adicionar Funcionário</button>
            </div>

            <form id="search-employees-panel" onSubmit={handleSubmit}>
                <div className="form-group-search-employees">
                    <label className="form-label">Nome</label>
                    <input
                        type="text"
                        className="form-control"
                        value={tempName}
                        onChange={(e) => setTempName(e.target.value)}
                        placeholder="Digite o nome"
                    />
                </div>

                <div className="form-group-search-employees">
                    <label className="form-label">Cargo</label>
                    <select
                        className="form-control"
                        value={tempRole}
                        onChange={(e) => setTempRole(e.target.value)}
                    >
                        <option value="">Selecione um cargo</option>
                        <option value="Adm">Adm</option>
                        <option value="Gestor">Gestor</option>
                        <option value="Motorista">Motorista</option>
                    </select>
                </div>

                <div className="form-group-search-employees">
                    <label className="form-label">Status</label>
                    <select
                        className="form-control"
                        value={tempStatus}
                        onChange={(e) => setTempStatus(e.target.value)}
                    >
                        <option value="">Selecione um status</option>
                        <option value="Ativo">Ativo</option>
                        <option value="Desligado">Desligado</option>
                        <option value="Férias">Férias</option>
                    </select>
                </div>

                <button className="btn btn-primary">Buscar</button>
            </form>

            <div className="table-scroll">
                <table className="employee-table">
                    <thead>
                        <tr>
                            <th>Nome do Funcionário</th>
                            <th>Email</th>
                            <th>Cargo</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredEmployees.map((emp, index) => (
                            <tr key={index} onClick={() => handleToggleEditModal(emp)}>
                                <td>{emp.empty ? "\u00A0" : emp.name}</td>
                                <td>{emp.empty ? "\u00A0" : emp.email}</td>
                                <td>{emp.empty ? "\u00A0" : emp.role}</td>
                                <td>{emp.empty ? "\u00A0" : emp.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
}
