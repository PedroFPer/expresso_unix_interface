import "../styles/EmployeesPanel.css";

export default function EmployeesPanel() {

    const employees = [
        { name: "Pedro Pereira Oliveira Souza", email: "PedroOliveiraTravel@gmail.com", role: "Adm", status: "Ativo" },
        { name: "Maria Silva", email: "MariaSilva@email.com", role: "Motorista", status: "Ativo" },
        { name: "João Santos", email: "JoaoSantos@email.com", role: "Gestor", status: "Inativo" },
        { name: "Ana Costa", email: "AnaCosta@email.com", role: "Motorista", status: "Ativo" }
    ];

    const totalRows = 7;

    const rows = [...employees];
    while (rows.length < totalRows) {
        rows.push({ empty: true });
    }

    return (
        <div id="employees-panel">
            <div id="header-employees-panel">
                <h3>Funcionários</h3>
                <button>Adicionar Funcionário</button>
            </div>

            <form id="search-employees-panel">
                <div className="form-group-search-employees">
                    <label className="form-label">Nome</label>
                    <input type="text" className="form-control" />
                </div>

                <div className="form-group-search-employees">
                    <label className="form-label">Cargo</label>
                    <input type="text" className="form-control" />
                </div>

                <div className="form-group-search-employees">
                    <label className="form-label">Status</label>
                    <input type="text" className="form-control" />
                </div>

                <button className="btn btn-primary">Buscar</button>
            </form>

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
                    {rows.map((emp, index) => (
                        <tr key={index}>
                            <td>{emp.empty ? "\u00A0" : emp.name}</td>
                            <td>{emp.empty ? "\u00A0" : emp.email}</td>
                            <td>{emp.empty ? "\u00A0" : emp.role}</td>
                            <td>{emp.empty ? "\u00A0" : emp.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
