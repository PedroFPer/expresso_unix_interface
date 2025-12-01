import { useState } from "react";
import SideBar from "../../../common-components/components/SideBar";
import EmployeeRow from "./components/EmployeeRow";
import Models from "./components/ManagerModel";
import "./styles/AdminManageEmployees.css";

export default function AdminManageEmployees() {

    const originalEmployees = [
        { name: "Pedro Ferreira", email: "Pedrin-Rj@gmail.com", role: "Diretor", status: "Ativo" },
        { name: "Daniel Santos", email: "Daniel@gmail.com", role: "Admin", status: "Férias" },
        { name: "Sayd Aires", email: "Sayd@gmail.com", role: "Diretor", status: "Ativo" },
        { name: "Liedson", email: "liedson@gmail.com", role: "Motorista", status: "Desligado" },
        { name: "joao", email: "joao@gmail.com", role: "Motorista", status: "Férias" }
    ];

    const [employeesList, setEmployeesList] = useState(originalEmployees);

    const [filterName, setFilterName] = useState("");
    const [filterRole, setFilterRole] = useState("");
    const [filterStatus, setFilterStatus] = useState("");

    function handleSearch() {
        const filtered = originalEmployees.filter(employee => {
            const matchesName = employee.name.toLowerCase().includes(filterName.toLowerCase());
            const matchesRole = filterRole === "" || employee.role === filterRole;
            const matchesStatus = filterStatus === "" || employee.status === filterStatus;

            return matchesName && matchesRole && matchesStatus;
        });

        setEmployeesList(filtered);
    }

    function handleAddEmployee(newEmployee) {
        setEmployeesList(prev => [...prev, newEmployee]);
    }

    return (
        <div className="grid-general">
            <SideBar />

            <div className="grid-main-and-footer">
                <main className="employees-main-container">

                    <div className="employees-title-container">
                        <h1>Gerenciar Funcionarios</h1>
                    </div>

                    <div className="employees-content-box">

                        <div className="employees-header-section">
                            <h2>Funcionários</h2>

                            <Models 
                                TitleButton={"+ Adicionar Funcionario"} 
                                TitleModel={"Adicionar Funcionario"}
                                onSave={handleAddEmployee}
                            />
                        </div>

                        <div className="employees-filters-container">

                            <div className="employees-filter-field">
                                <label>Nome</label>
                                <input 
                                    type="text" 
                                    placeholder="Digite um nome"
                                    value={filterName}
                                    onChange={(e) => setFilterName(e.target.value)}
                                />
                            </div>

                            <div className="employees-filter-field">
                                <label>Cargo</label>
                                <select 
                                    value={filterRole} 
                                    onChange={(e) => setFilterRole(e.target.value)}
                                >
                                    <option value="">Selecione um cargo</option>
                                    <option>Motorista</option>
                                    <option>Diretor</option>
                                    <option>Atendente</option>
                                </select>
                            </div>

                            <div className="employees-filter-field">
                                <label>Status</label>
                                <select 
                                    value={filterStatus} 
                                    onChange={(e) => setFilterStatus(e.target.value)}
                                >
                                    <option value="">Selecione um status</option>
                                    <option>Ativo</option>
                                    <option>Férias</option>
                                    <option>Desligado</option>
                                </select>
                            </div>

                            <button 
                                className="button-search-employees"
                                onClick={handleSearch}
                            >
                                Buscar
                            </button>

                        </div>

                        <table className="employees-table">
                            <thead>
                                <tr>
                                    <th>Nome do Funcionário</th>
                                    <th>Email</th>
                                    <th>Cargo</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {employeesList.map((emp, index) => (
                                    <EmployeeRow key={index} employee={emp} />
                                ))}
                            </tbody>
                        </table>

                    </div>

                </main>
            </div>
        </div>
    );
}


