import { useState } from "react";
import "../styles/ModalFormAddTravel.css"

export default function ModalFormAddTravel() {
    const [isOpenOutbound, setIsOpenOutbound] = useState(true);
    const [isOpenReturn, setIsOpenReturn] = useState(false);
    const [isOpenExtraInfo, setIsOpenExtraInfo] = useState(false);

    return (
        <main id="modal-form-add-travel">
            <div className="accordion-add-travel" onClick={() => setIsOpenOutbound(prev => !prev)}>
                <header className="accordion-header-add-travel">
                    <h3>Trecho de Ida</h3>
                    <i class={isOpenOutbound ? "bi bi-caret-up" : "bi bi-caret-down"}></i>
                </header>
                {isOpenOutbound && (
                    <form>
                        <div className="form-group-add-travel">
                            <div className="item-add-travel">
                                <label>Origem <span>(Obrigatório)</span></label>
                                <select
                                >
                                    <option value="">Feira de Santana, BA</option>
                                    <option value="Salvador, BA">Salvador, BA</option>
                                    <option value="Cachoeira, BA">Cachoeira, BA</option>
                                    <option value="Alagonhias, BA">Alagonhias, BA</option>
                                </select>
                            </div>

                        </div>
                    </form>
                )}
            </div>

        </main>
    )
}