import "../styles/ModelHeaderAddEmployees.css"

export default function ModelHeaderAddEmployees({ setActiveTab }) {
    return (

        <header id="model-header-add-employees">
            <h2>Adicionar Funcionário</h2>
            <nav id="nav-tab-add-employees">
                <button onClick={() => setActiveTab("form")}>Formulário</button>
                <button onClick={() => setActiveTab("preview")}>Prévia</button>
            </nav>
        </header>

    )
}