import { useState } from "react";
import ".././styles/ModelTravelCatalog.css";

function Models({ TitleButton, TitleModel }) {
  const [ModelsIsClosed, setModelsIsClosed] = useState(true);

  const [TrechoIdaIsClicked, setTrechoIdaIsClicked] = useState(false);
  const [TrechoVoltaIsClicked, setTrechoVoltaIsClicked] = useState(false);
  const [InfoGeraisIsClicked, setInfoGeraisIsClicked] = useState(false);

  const [errors, setErrors] = useState({});

  const [ida, setIda] = useState({
    origem: "",
    destino: "",
    embarque: "",
    desembarque: "",
    dataSaida: "",
    dataChegada: "",
    horaSaida: "",
    horaChegada: "",
    motorista: ""
  });

  function handleChange(e) {
    setIda({
      ...ida,
      [e.target.name]: e.target.value
    });
  }

  function validateIda() {
    let newErrors = {};

    if (!ida.origem.trim()) newErrors.origem = "Preencha este campo";
    if (!ida.destino.trim()) newErrors.destino = "Preencha este campo";
    if (!ida.embarque.trim()) newErrors.embarque = "Preencha este campo";
    if (!ida.desembarque.trim()) newErrors.desembarque = "Preencha este campo";
    if (!ida.dataSaida.trim()) newErrors.dataSaida = "Preencha este campo";
    if (!ida.dataChegada.trim()) newErrors.dataChegada = "Preencha este campo";
    if (!ida.horaSaida.trim()) newErrors.horaSaida = "Preencha este campo";
    if (!ida.horaChegada.trim()) newErrors.horaChegada = "Preencha este campo";
    if (!ida.motorista.trim()) newErrors.motorista = "Preencha este campo";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleContinue() {
    if (!validateIda()) {
      if (!TrechoIdaIsClicked) setTrechoIdaIsClicked(true);
      return;
    }
  }

  return (
    <div className="background-container">
      <button 
        className="button-open-model"
        onClick={() => setModelsIsClosed(false)}
      >
        {TitleButton}
      </button>

      {ModelsIsClosed ? (
        <div></div>
      ) : (
        <div
          className="background-overlay"
          onClick={() => setModelsIsClosed(true)}
        >
          <div
            className="models"
            onClick={(e) => e.stopPropagation()}
          >
            <h1>{TitleModel}</h1>

            <div className="model-tabs">
              <p className="tab-active">Formulário</p>
              <p className="tab-inactive">Prévia</p>
            </div>

            <div className="model-section">

              <div className="sections">
                <p>Trecho de ida</p>
                <button 
                  onClick={() => setTrechoIdaIsClicked(!TrechoIdaIsClicked)}
                >
                  {TrechoIdaIsClicked ? (
                    <i className="bi bi-caret-up"></i>
                  ) : (
                    <i className="bi bi-caret-down"></i>
                  )}
                </button>
              </div>

              {TrechoIdaIsClicked && (
                <div className="section-inputs">

                  <div className="two-inputs">
                    <div className="input-group">
                      <p>Origem (Obrigatório)</p>
                      <input name="origem" type="text" value={ida.origem} onChange={handleChange} />
                      {errors.origem && <p className="error-text">{errors.origem}</p>}
                    </div>

                    <div className="input-group">
                      <p>Destino (Obrigatório)</p>
                      <input name="destino" type="text" value={ida.destino} onChange={handleChange} />
                      {errors.destino && <p className="error-text">{errors.destino}</p>}
                    </div>
                  </div>

                  <div className="input-group">
                    <p>Local de Embarque (Obrigatório)</p>
                    <input name="embarque" type="text" value={ida.embarque} onChange={handleChange} />
                    {errors.embarque && <p className="error-text">{errors.embarque}</p>}
                  </div>

                  <div className="input-group">
                    <p>Local de Desembarque (Obrigatório)</p>
                    <input name="desembarque" type="text" value={ida.desembarque} onChange={handleChange} />
                    {errors.desembarque && <p className="error-text">{errors.desembarque}</p>}
                  </div>

                  <div className="two-inputs">
                    <div className="input-group">
                      <p>Data de Saída (Obrigatório)</p>
                      <input name="dataSaida" type="date" value={ida.dataSaida} onChange={handleChange} />
                      {errors.dataSaida && <p className="error-text">{errors.dataSaida}</p>}
                    </div>

                    <div className="input-group">
                      <p>Data de Chegada (Obrigatório)</p>
                      <input name="dataChegada" type="date" value={ida.dataChegada} onChange={handleChange} />
                      {errors.dataChegada && <p className="error-text">{errors.dataChegada}</p>}
                    </div>
                  </div>

                  <div className="two-inputs">
                    <div className="input-group">
                      <p>Horário de Saída (Obrigatório)</p>
                      <input name="horaSaida" type="time" value={ida.horaSaida} onChange={handleChange} />
                      {errors.horaSaida && <p className="error-text">{errors.horaSaida}</p>}
                    </div>

                    <div className="input-group">
                      <p>Horário de Chegada (Obrigatório)</p>
                      <input name="horaChegada" type="time" value={ida.horaChegada} onChange={handleChange} />
                      {errors.horaChegada && <p className="error-text">{errors.horaChegada}</p>}
                    </div>
                  </div>

                  <div className="input-group">
                    <p>Motorista Responsável (Obrigatório)</p>
                    <input name="motorista" type="text" value={ida.motorista} onChange={handleChange} />
                    {errors.motorista && <p className="error-text">{errors.motorista}</p>}
                  </div>

                </div>
              )}

              <div className="sections">
                <p>Trecho de Retorno (Opcional)</p>
                <button 
                  onClick={() => setTrechoVoltaIsClicked(!TrechoVoltaIsClicked)}
                >
                  {TrechoVoltaIsClicked ? (
                    <i className="bi bi-caret-up"></i>
                  ) : (
                    <i className="bi bi-caret-down"></i>
                  )}
                </button>
              </div>

              {TrechoVoltaIsClicked && (
                <div className="section-inputs">

                  <div className="two-inputs">
                    <div className="input-group">
                      <p>Origem</p>
                      <input type="text" />
                    </div>

                    <div className="input-group">
                      <p>Destino</p>
                      <input type="text" />
                    </div>
                  </div>

                  <div className="input-group">
                    <p>Local de Embarque</p>
                    <input type="text" />
                  </div>

                  <div className="input-group">
                    <p>Local de Desembarque</p>
                    <input type="text" />
                  </div>

                  <div className="two-inputs">
                    <div className="input-group">
                      <p>Data de Saída</p>
                      <input type="date" />
                    </div>

                    <div className="input-group">
                      <p>Data de Chegada</p>
                      <input type="date" />
                    </div>
                  </div>

                  <div className="two-inputs">
                    <div className="input-group">
                      <p>Horário de Saída</p>
                      <input type="time" />
                    </div>

                    <div className="input-group">
                      <p>Horário de Chegada</p>
                      <input type="time" />
                    </div>
                  </div>

                </div>
              )}

              <div className="sections">
                <p>Informações Gerais</p>
                <button 
                  onClick={() => setInfoGeraisIsClicked(!InfoGeraisIsClicked)}
                >
                  {InfoGeraisIsClicked ? (
                    <i className="bi bi-caret-up"></i>
                  ) : (
                    <i className="bi bi-caret-down"></i>
                  )}
                </button>
              </div>

              {InfoGeraisIsClicked && (
                <div className="section-inputs">
                  <div className="input-group">
                    <p>Anotações Gerais</p>
                    <textarea rows="4"></textarea>
                  </div>
                </div>
              )}

              <div className="model-buttons">
                <button className="cancel-button">Cancelar</button>
                <button className="confirm-button" onClick={handleContinue}>Continuar</button>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default Models;
