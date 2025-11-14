import { Button } from "bootstrap";
import { useState } from "react";
import PopUP from "./PopUp";
import "../styles/Models.css";


function Models({TitleButton, TitleModel}) {
const [ModelsIsClosed, setModelsIsClosed] = useState(true);
const [TrechoIdaIsClosed, setTrechoIdaIsClosed] = useState(true);
const [TrechoVoltaIsClosed, setTrechoVoltaIsClosed] = useState(true);
const [DetalhesIsClicked, setDetalhesIsClicked] = useState(true);
const [PreviaIsClicked, setPreviaIsClicked] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    return (
        <div>
            {ModelsIsClosed ? (
                <button className="add-button" onClick={() => setModelsIsClosed(false)}>{TitleButton}</button>
            ):(
                <div className="models">
                    <div className="title-model-layout">
                        <h2 className="title-model">{TitleModel}</h2>
                    </div>
                    <div>
                        <div className="buttons-Details-Previa">
                             <button className={`button-details ${DetalhesIsClicked ? 'clicked' : 'not-clicked'}`}
                             onClick={()=>{ setDetalhesIsClicked(true);setPreviaIsClicked(false);}}
                             > Detalhes
                            </button>

                             <button className={`button-previa ${PreviaIsClicked ? 'clicked' : 'not-clicked'}`}
                             onClick={()=>{ setPreviaIsClicked(true); setDetalhesIsClicked(false);}}
                             >Previa
                             </button>
                        </div>
                        {DetalhesIsClicked ?
                        (
                            <div>
                                <div className="text-and-button-section">
                                    <p>Trecho da ida</p>
                                    <button onClick={
                                        () => setTrechoIdaIsClosed(!TrechoIdaIsClosed)}>{TrechoIdaIsClosed?(<i class="bi bi-caret-down"></i>):(<i class="bi bi-caret-up"></i>)}
                                    </button>
                                </div>
                                {TrechoIdaIsClosed ? ( <p></p> ):
                                (
                                    <section>
                                        <div className="input-place-trip-model">
                                        <p>Origem</p>
                                        <p>Destino</p>
                                        <input type="text" />
                                        <input type="text" />
                                        </div>

                                        <div className="input-place-model">
                                            <p>Embarque(obrigatorio)</p>
                                            <input type="text" />

                                            <p>Desembarque(obrigatorio)</p>
                                            <input type="text" />

                                        </div>
                                        <div className="dates-input-model">
                                            <p>Data de Saida (obrigatorio)</p>
                                            <p>Data de Chegada (obrigatorio)</p>

                                            <input type="date" name="" id="" />
                                            <input type="date" name="" id="" />

                                        </div>

                                        <div className="time-input-model">
                                            <p>Hora de Saida (obrigatorio)</p>
                                            <p>Hora de Chegada (obrigatorio)</p>

                                            <input type="time" name="" id="" />
                                            <input type="time" name="" id="" />
                                        </div>
                                    </section>
                                )}
                            

                        
                                <div className="text-and-button-section">
                                    <p>Trecho Volta</p>
                                    <button onClick={
                                        () => setTrechoVoltaIsClosed(!TrechoVoltaIsClosed)}>{TrechoVoltaIsClosed?(<i class="bi bi-caret-down"></i>):(<i class="bi bi-caret-up"></i>)}
                                    </button>
                                </div>
                                {TrechoVoltaIsClosed ? ( <p></p> ):
                                (
                                    <section>
                                        <div className="input-place-trip-model">
                                        <p>Origem(Obrigatorio)</p>
                                        <p>Destino(obrigatorio)</p>
                                        <input type="text" />
                                        <input type="text" />
                                        </div>

                                        <div className="input-place-model">
                                            <p>Embarque(obrigatorio)</p>
                                            <input type="text" />

                                            <p>Desembarque(obrigatorio)</p>
                                            <input type="text" />

                                        </div>
                                        <div className="dates-input-model">
                                            <p>Data de Saida (obrigatorio)</p>
                                            <p>Data de Chegada (obrigatorio)</p>

                                            <input type="date" name="" id="" />
                                            <input type="date" name="" id="" />

                                        </div>

                                        <div className="time-input-model">
                                            <p>Hora de Saida (obrigatorio)</p>
                                            <p>Hora de Chegada (obrigatorio)</p>

                                            <input type="time" name="" id="" />
                                            <input type="time" name="" id="" />
                                        </div>
                                    </section>
                                )}

                                <div className="buttons-model">
                                    <button onClick={() => setShowPopup(true)}>Cancelar</button>
                                    
                                    <button>Confirmar</button>
                                </div>
                            </div>
                        ):( <h1></h1> )}
                        {PreviaIsClicked ?( <p>previa em construcao</p> ):( <p></p> )}
                        
                        
                    </div>


                    
                </div>
            ) }

            {showPopup && (
                <PopUP
                    Title="Cancelar Modelo"
                    Description="Tem certeza que deseja cancelar?"
                    onConfirm={() => {
                        setShowPopup(false);
                        setModelsIsClosed(false);
                    }}
                    
                    onCancel={() => {setShowPopup(false); setModelsIsClosed(true)}}
                />
            )}
            
        </div>
        
        
        
    )
}

export default Models;