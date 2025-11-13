import { Button } from "bootstrap";
import { useState } from "react";
import "../styles/Models.css";

function Models({TitleButton, TitleModel}) {
const [ModelsIsClosed, setModelsIsClosed] = useState(true);
const [TrechoIdaIsClosed, setTrechoIdaIsClosed] = useState(true);
const [TrechoVoltaIsClosed, setTrechoVoltaIsClosed] = useState(true);
const [DetalhesIsClicked, setDetalhesIsClicked] = useState(true);
const [PreviaIsClicked, setPreviaIsClicked] = useState(false);

    return (
        <div>
            {ModelsIsClosed ? (
                <button className="AddButton" onClick={() => setModelsIsClosed(false)}>{TitleButton}</button>
            ):(
                <div className="Models">
                    <h2>{TitleModel}</h2>
                    <div>
                        <div className="ButtonsModel">
                             <button 
                             onClick={()=>{ setDetalhesIsClicked(true);setPreviaIsClicked(false);}}
                             > Detalhes
                            </button>

                             <button 
                             onClick={()=>{ setPreviaIsClicked(true); setDetalhesIsClicked(false);}}
                             >Previa
                             </button>
                        </div>
                        {DetalhesIsClicked ?
                        (
                            <div>
                                <div className="TextAndButtonSection">
                                    <p>Trecho da ida</p>
                                    <button onClick={
                                        () => setTrechoIdaIsClosed(!TrechoIdaIsClosed)}>{TrechoIdaIsClosed?(<i class="bi bi-caret-down"></i>):(<i class="bi bi-caret-up"></i>)}
                                    </button>
                                </div>
                                {TrechoIdaIsClosed ? ( <p></p> ):
                                (
                                    <section>
                                        <div className="InputPlaceTripModel">
                                        <p>Origem(Obrigatorio)</p>
                                        <p>Destino(obrigatorio)</p>
                                        <input type="text" />
                                        <input type="text" />
                                        </div>

                                        <div className="InputPlaceModel">
                                            <p>Embarque(obrigatorio)</p>
                                            <input type="text" />

                                            <p>Desembarque(obrigatorio)</p>
                                            <input type="text" />

                                        </div>
                                        <div className="DatesInputModel">
                                            <p>Data de Saida (obrigatorio)</p>
                                            <p>Data de Chegada (obrigatorio)</p>

                                            <input type="date" name="" id="" />
                                            <input type="date" name="" id="" />

                                        </div>

                                        <div className="TimeInputModel">
                                            <p>Hora de Saida (obrigatorio)</p>
                                            <p>Hora de Chegada (obrigatorio)</p>

                                            <input type="time" name="" id="" />
                                            <input type="time" name="" id="" />
                                        </div>
                                    </section>
                                )}
                            

                        
                                <div className="TextAndButtonSection">
                                    <p>Trecho Volta</p>
                                    <button onClick={
                                        () => setTrechoVoltaIsClosed(!TrechoVoltaIsClosed)}>{TrechoVoltaIsClosed?(<i class="bi bi-caret-down"></i>):(<i class="bi bi-caret-up"></i>)}
                                    </button>
                                </div>
                                {TrechoVoltaIsClosed ? ( <p></p> ):
                                (
                                    <section>
                                        <div className="InputPlaceTripModel">
                                        <p>Origem(Obrigatorio)</p>
                                        <p>Destino(obrigatorio)</p>
                                        <input type="text" />
                                        <input type="text" />
                                        </div>

                                        <div className="InputPlaceModel">
                                            <p>Embarque(obrigatorio)</p>
                                            <input type="text" />

                                            <p>Desembarque(obrigatorio)</p>
                                            <input type="text" />

                                        </div>
                                        <div className="DatesInputModel">
                                            <p>Data de Saida (obrigatorio)</p>
                                            <p>Data de Chegada (obrigatorio)</p>

                                            <input type="date" name="" id="" />
                                            <input type="date" name="" id="" />

                                        </div>

                                        <div className="TimeInputModel">
                                            <p>Hora de Saida (obrigatorio)</p>
                                            <p>Hora de Chegada (obrigatorio)</p>

                                            <input type="time" name="" id="" />
                                            <input type="time" name="" id="" />
                                        </div>
                                    </section>
                                )}

                                <div className="ButtonsModel">
                                    <button></button>
                                    <button></button>
                                </div>
                            </div>
                        ):( <h1></h1> )}
                        {PreviaIsClicked ?( <p>previa em construcao</p> ):( <p></p> )}
                        
                        
                    </div>


                    <button onClick={() => setModelsIsClosed(true)}>Fechar</button>
                </div>
            ) }
            
        </div>
        
        
        
    )
}

export default Models;