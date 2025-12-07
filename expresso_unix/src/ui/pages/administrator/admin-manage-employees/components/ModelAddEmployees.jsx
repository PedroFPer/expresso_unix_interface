import { useState } from "react"
import ModelHeaderAddEmployees from "./ModelHeaderAddEmployees"
import ModelFormAddTravel from "./ModelFormAddTravel"
import ModelPreviewAddTravel from "./ModelPreviewAddTravel"
import "../styles/ModelAddEmployees.css"

export default function ModelAddEmployees({ openModal }) {

    const [activeTab, setActiveTab] = useState("form");

    return (
        <aside className={`model-add-employees ${openModal ? "model-add-employees-show" : "model-add-employees-hidden"}`}>
            <ModelHeaderAddEmployees setActiveTab={setActiveTab}></ModelHeaderAddEmployees>

            {activeTab === "form" && <ModelFormAddTravel />}
            {activeTab === "preview" && <ModelPreviewAddTravel />}
        </aside>
    )
}