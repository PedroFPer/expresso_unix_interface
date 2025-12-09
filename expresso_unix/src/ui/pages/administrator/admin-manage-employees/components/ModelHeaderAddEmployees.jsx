import "../styles/ModelHeaderAddEmployees.css"

export default function ModelHeaderAddEmployees({activeTab, setActiveTab }) {
    return (

        <header id="model-header-add-employees">
            <h2>Adicionar Viagem</h2>
            <nav id="nav-tab-add-employees">
                <button className={activeTab === "form" ? "tab-active-add-employees" : "tab-inactive-add-employees"} onClick={() => setActiveTab("form")}>Formulário</button>
                <button className={activeTab === "preview" ? "tab-active-add-employees" : "tab-inactive-add-employees"} onClick={() => setActiveTab("preview")}>Prévia</button>
            </nav>
        </header>

    )
}