import { useState } from "react";
import "../styles/ModelFormAddEmployees.css"

export default function ModelFormAddEmployees() {
    const [isOpenOutbound, setIsOpenOutbound] = useState(true);
    const [isOpenReturn, setIsOpenReturn] = useState(false);
    const [isOpenExtra, setIsOpenExtra] = useState(false);

    return (
        <main id="model-form-add-employees">
            <div className="accordion-add-employees" onClick={() => setIsOpenOutbound(prev => !prev)}>
                <header className="accordion-header-add-employees">
                    <h3>Trecho de Ida</h3>
                    <i class={isOpenOutbound ? "bi bi-caret-up" : "bi bi-caret-down"}></i>
                </header>
                {isOpenOutbound &&(
                    <div>
                        Form
                    </div>
                )}
            </div>
        </main>
    )
}