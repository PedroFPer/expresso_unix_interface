import { useState } from "react";
import "../styles/ModelTravelCatalog.css";

function Models({ TitleButton, TitleModel, onAddViagem }) {
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
    motorista: "",
    price: ""
  });

  const [volta, setVolta] = useState({
    origem: "",
    destino: "",
    embarque: "",
    desembarque: "",
    dataSaida: "",
    dataChegada: "",
    horaSaida: "",
    horaChegada: ""
  });

  function handleChangeIda(e) {
    setIda({
      ...ida,
      [e.target.name]: e.target.value
    });
  }

  function handleChangeVolta(e) {
    setVolta({
      ...volta,
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
    if (!ida.price.trim()) newErrors.price = "Preencha este campo";
    setErrors(prev => ({ ...prev, ...newErrors }));
    return Object.keys(newErrors).length === 0;
  }

  function validateVolta() {
    let newErrors = {};
    if (!volta.origem.trim()) newErrors.v_origem = "Preencha este campo";
    if (!volta.destino.trim()) newErrors.v_destino = "Preencha este campo";
    if (!volta.embarque.trim()) newErrors.v_embarque = "Preencha este campo";
    if (!volta.desembarque.trim()) newErrors.v_desembarque = "Preencha este campo";
    if (!volta.dataSaida.trim()) newErrors.v_dataSaida = "Preencha este campo";
    if (!volta.dataChegada.trim()) newErrors.v_dataChegada = "Preencha este campo";
    if (!volta.horaSaida.trim()) newErrors.v_horaSaida = "Preencha este campo";
    if (!volta.horaChegada.trim()) newErrors.v_horaChegada = "Preencha este campo";
    setErrors(prev => ({ ...prev, ...newErrors }));
    return Object.keys(newErrors).length === 0;
  }

  function anyVoltaFilled() {
    return Object.values(volta).some(v => v && v.toString().trim() !== "");
  }

  function resetForm() {
    setIda({
      origem: "",
      destino: "",
      embarque: "",
      desembarque: "",
      dataSaida: "",
      dataChegada: "",
      horaSaida: "",
      horaChegada: "",
      motorista: "",
      price: ""
    });
    setVolta({
      origem: "",
      destino: "",
      embarque: "",
      desembarque: "",
      dataSaida: "",
      dataChegada: "",
      horaSaida: "",
      horaChegada: ""
    });
    setErrors({});
    setTrechoIdaIsClicked(false);
    setTrechoVoltaIsClicked(false);
    setInfoGeraisIsClicked(false);
  }

  function calcularDuracao(saida, chegada) {
    if (!saida || !chegada) return "--:--";
    const [h1, m1] = splitTime(saida);
    const [h2, m2] = splitTime(chegada);
    if (isNaN(h1) || isNaN(m1) || isNaN(h2) || isNaN(m2)) return "--:--";
    let total = h2 * 60 + m2 - (h1 * 60 + m1);
    if (total < 0) total += 24 * 60;
    const horas = Math.floor(total / 60);
    const minutos = total % 60;
    return `${String(horas).padStart(2, "0")}:${String(minutos).padStart(2, "0")}`;
  }

  function splitTime(h) {
    return h.split(":").map(s => Number(s));
  }

  function handleContinue() {
    setErrors({});
    const idaOk = validateIda();
    const voltaExists = anyVoltaFilled() || TrechoVoltaIsClicked;
    let voltaOk = true;
    if (voltaExists) {
      voltaOk = validateVolta();
    }
    if (!idaOk || !voltaOk) {
      if (!TrechoIdaIsClicked) setTrechoIdaIsClicked(true);
      if (voltaExists && !TrechoVoltaIsClicked) setTrechoVoltaIsClicked(true);
      return;
    }
    const novaViagem = {
      origem: ida.origem,
      destino: ida.destino,
      duracao: calcularDuracao(ida.horaSaida, ida.horaChegada),
      price: ida.price || "R$ --,--",
      goAndGoback: voltaExists ? "ida_volta" : "go",
      trechoIda: { ...ida },
      trechoVolta: voltaExists ? { ...volta } : null
    };
    if (typeof onAddViagem === "function") onAddViagem(novaViagem);
    resetForm();
    setModelsIsClosed(true);
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
                      <input name="origem" type="text" value={ida.origem} onChange={handleChangeIda} />
                      {errors.origem && <p className="error-text">{errors.origem}</p>}
                    </div>

                    <div className="input-group">
                      <p>Destino (Obrigatório)</p>
                      <input name="destino" type="text" value={ida.destino} onChange={handleChangeIda} />
                      {errors.destino && <p className="error-text">{errors.destino}</p>}
                    </div>
                  </div>

                  <div className="input-group">
                    <p>Local de Embarque (Obrigatório)</p>
                    <input name="embarque" type="text" value={ida.embarque} onChange={handleChangeIda} />
                    {errors.embarque && <p className="error-text">{errors.embarque}</p>}
                  </div>

                  <div className="input-group">
                    <p>Local de Desembarque (Obrigatório)</p>
                    <input name="desembarque" type="text" value={ida.desembarque} onChange={handleChangeIda} />
                    {errors.desembarque && <p className="error-text">{errors.desembarque}</p>}
                  </div>

                  <div className="two-inputs">
                    <div className="input-group">
                      <p>Data de Saída (Obrigatório)</p>
                      <input name="dataSaida" type="date" value={ida.dataSaida} onChange={handleChangeIda} />
                      {errors.dataSaida && <p className="error-text">{errors.dataSaida}</p>}
                    </div>

                    <div className="input-group">
                      <p>Data de Chegada (Obrigatório)</p>
                      <input name="dataChegada" type="date" value={ida.dataChegada} onChange={handleChangeIda} />
                      {errors.dataChegada && <p className="error-text">{errors.dataChegada}</p>}
                    </div>
                  </div>

                  <div className="two-inputs">
                    <div className="input-group">
                      <p>Horário de Saída (Obrigatório)</p>
                      <input name="horaSaida" type="time" value={ida.horaSaida} onChange={handleChangeIda} />
                      {errors.horaSaida && <p className="error-text">{errors.horaSaida}</p>}
                    </div>

                    <div className="input-group">
                      <p>Horário de Chegada (Obrigatório)</p>
                      <input name="horaChegada" type="time" value={ida.horaChegada} onChange={handleChangeIda} />
                      {errors.horaChegada && <p className="error-text">{errors.horaChegada}</p>}
                    </div>
                  </div>

                  <div className="input-group">
                    <p>Motorista Responsável (Obrigatório)</p>
                    <input name="motorista" type="text" value={ida.motorista} onChange={handleChangeIda} />
                    {errors.motorista && <p className="error-text">{errors.motorista}</p>}
                  </div>

                  <div className="input-group">
                    <p>Preço (Obrigatório)</p>
                    <input name="price" type="text" value={ida.price} onChange={handleChangeIda} placeholder="R$ 0,00" />
                    {errors.price && <p className="error-text">{errors.price}</p>}
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
                      <input name="origem" type="text" value={volta.origem} onChange={handleChangeVolta} />
                      {errors.v_origem && <p className="error-text">{errors.v_origem}</p>}
                    </div>

                    <div className="input-group">
                      <p>Destino</p>
                      <input name="destino" type="text" value={volta.destino} onChange={handleChangeVolta} />
                      {errors.v_destino && <p className="error-text">{errors.v_destino}</p>}
                    </div>
                  </div>

                  <div className="input-group">
                    <p>Local de Embarque</p>
                    <input name="embarque" type="text" value={volta.embarque} onChange={handleChangeVolta} />
                    {errors.v_embarque && <p className="error-text">{errors.v_embarque}</p>}
                  </div>

                  <div className="input-group">
                    <p>Local de Desembarque</p>
                    <input name="desembarque" type="text" value={volta.desembarque} onChange={handleChangeVolta} />
                    {errors.v_desembarque && <p className="error-text">{errors.v_desembarque}</p>}
                  </div>

                  <div className="two-inputs">
                    <div className="input-group">
                      <p>Data de Saída</p>
                      <input name="dataSaida" type="date" value={volta.dataSaida} onChange={handleChangeVolta} />
                      {errors.v_dataSaida && <p className="error-text">{errors.v_dataSaida}</p>}
                    </div>

                    <div className="input-group">
                      <p>Data de Chegada</p>
                      <input name="dataChegada" type="date" value={volta.dataChegada} onChange={handleChangeVolta} />
                      {errors.v_dataChegada && <p className="error-text">{errors.v_dataChegada}</p>}
                    </div>
                  </div>

                  <div className="two-inputs">
                    <div className="input-group">
                      <p>Horário de Saída</p>
                      <input name="horaSaida" type="time" value={volta.horaSaida} onChange={handleChangeVolta} />
                      {errors.v_horaSaida && <p className="error-text">{errors.v_horaSaida}</p>}
                    </div>

                    <div className="input-group">
                      <p>Horário de Chegada</p>
                      <input name="horaChegada" type="time" value={volta.horaChegada} onChange={handleChangeVolta} />
                      {errors.v_horaChegada && <p className="error-text">{errors.v_horaChegada}</p>}
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
                <button className="cancel-button" onClick={() => { resetForm(); setModelsIsClosed(true); }}>Cancelar</button>
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
