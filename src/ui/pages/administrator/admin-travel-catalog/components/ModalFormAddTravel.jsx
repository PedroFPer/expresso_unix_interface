import { useState } from "react";
import "../styles/ModalFormAddTravel.css"

export default function ModalFormAddTravel() {
    const [isOpenOutbound, setIsOpenOutbound] = useState(true);
    const [isOpenReturn, setIsOpenReturn] = useState(false);
    const [isOpenExtraInfo, setIsOpenExtraInfo] = useState(false);

    return (
        <form id="modal-form-add-travel">
            <div className="accordion-add-travel">
                <header className="accordion-header-add-travel" onClick={() => setIsOpenOutbound(prev => !prev)}>
                    <h3>Trecho de Ida</h3>
                    <i class={isOpenOutbound ? "bi bi-caret-up" : "bi bi-caret-down"}></i>
                </header>
                {isOpenOutbound && (

                  <div>
                      
                      <div className="input-row-two-columns">
                          <div className="item-row-two-columns">
                              <label>Origem <span>(Obrigatório)</span></label>
                              <select
                              >
                                  <option value="">Escolha a origem</option>
                                  <option value="Salvador, BA">Salvador, BA</option>
                                  <option value="Cachoeira, BA">Cachoeira, BA</option>
                                  <option value="Alagonhias, BA">Alagonhias, BA</option>
                              </select>
                          </div>
                          <div className="item-row-two-columns">
                              <label>Destino <span>(Obrigatório)</span></label>
                              <select
                              >
                                  <option value="">Escolha o destino</option>
                                  <option value="Salvador, BA">Salvador, BA</option>
                                  <option value="Cachoeira, BA">Cachoeira, BA</option>
                                  <option value="Alagonhias, BA">Alagonhias, BA</option>
                              </select>
                          </div>
                      </div>

                      <div className="input-row-full">
                            <label>Local de Embarque<span>(Obrigatório)</span></label>
                            <input
                                type="text"
                                placeholder="Praça da Sé, 406 - Pelourinho, Salvador - BA, 40020-210"
                               
                            />

                        </div>

                        <div className="input-row-full">
                            <label>Local de Desembarque<span>(Obrigatório)</span></label>
                            <input
                                type="text"
                                placeholder="R. Augusto dos Anjos, 65 - Rua Nova, Feira de Santana - BA, 40301-110"
                               
                            />
                        </div>

                     <div className="input-row-two-columns">
                          <div className="item-row-two-columns">
                              <label>Data de Saída <span>(Obrigatório)</span></label>
                               <input type="date" />
                          </div>
                          <div className="item-row-two-columns">
                              <label>Data de Chegada <span>(Obrigatório)</span></label>
                              <input type="date" />
                          </div>
                      </div>

                      
                     <div className="input-row-two-columns">
                          <div className="item-row-two-columns">
                              <label>Horario de Saída <span>(Obrigatório)</span></label>
                               <input type="date" />
                          </div>
                          <div className="item-row-two-columns">
                              <label>Horario de Chegada <span>(Obrigatório)</span></label>
                              <input type="time" />
                          </div>
                      </div>

                      <div className="input-row-full">
                            <label>Motorista Responsável<span>(Obrigatório)</span></label>
                             <select
                              >
                                  <option value="">Escolha o Motorista</option>
                                  <option value="Lucas Moreira">Lucas Moreira</option>
                                  <option value="Maria Mariana">Maria Mariana</option>
                                  <option value="Rodrigo Rodil">Rodrigo Rodil</option>
                              </select>
                        </div>


                      
                  </div>

                )}
            </div>

        </form>
    )
}