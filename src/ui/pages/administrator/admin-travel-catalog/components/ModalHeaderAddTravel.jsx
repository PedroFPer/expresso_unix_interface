import "../styles/ModalHeaderAddTravel.css"

export default function ModalHeaderAddTravel({activeTab, setActiveTab}){
    return(
        <header id="modal-header-add-travel">
            <h2>Adicionar Viagem</h2>
            <nav id="nav-tab-add-travel">
                <button className={activeTab === "form" ? "tab-active-add-travel" : "tab-inactive-add-travel"} onClick={() => setActiveTab("form")}>Formulário</button>
                <button className={activeTab === "preview" ? "tab-active-add-travel" : "tab-inactive-add-travel"} onClick={() => setActiveTab("preview")}>Prévia</button>
            </nav>
        </header>
    )
}