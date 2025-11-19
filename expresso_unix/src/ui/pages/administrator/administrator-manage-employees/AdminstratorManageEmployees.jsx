import { useState } from "react";
import SideBar from "../../../common-components/pagina-modelo/Components/SideBar";
import EmployeeRow from "./components/EmployeeRow";
import Models from "../../../common-components/pagina-modelo/Components/Models";
import "./styles/AdminstratorManageEmployees.css";

function AdminstratorManageEmployees() {

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


    return (
        <div className="grid-geral">
            <SideBar />

            <div>
                <main className="employees-main-container">

                    <div className="employees-title-container">
                        <h1>Gerenciar Funcionarios</h1>
                    </div>

                    <div className="employees-content-box">

                        <div className="employees-header-section">
                            <h2>Funcionários</h2>

                            <Models TitleButton={"+ Adicionar Funcionario"} TitleModel={"Adicionar Funcionario"}></Models>
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

export default AdminstratorManageEmployees;
