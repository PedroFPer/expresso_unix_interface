import { useState } from "react"
import ModelHeaderAddEmployees from "./ModelHeaderAddEmployees"
import ModelFormAddEmployees from "./ModelFormAddEmployees"
import ModelPreviewAddTravel from "./ModelPreviewAddTravel"
import "../styles/ModelAddEmployees.css"

export default function ModelAddEmployees({ openModal }) {

    const [activeTab, setActiveTab] = useState("form");

    return (
        <aside className={`model-add-employees ${openModal ? "model-add-employees-show" : "model-add-employees-hidden"}`}>
            <ModelHeaderAddEmployees activeTab={activeTab} setActiveTab={setActiveTab}></ModelHeaderAddEmployees>

            {activeTab === "form" && <ModelFormAddEmployees />}
            {activeTab === "preview" && <ModelPreviewAddTravel />}

            <div id="group-button-add-employees">
                <button id="cancel-button-add-employees">Cancelar</button>
                <button id="continue-button-add-employees">Continuar</button>
        
            </div>
        </aside>
    )
}