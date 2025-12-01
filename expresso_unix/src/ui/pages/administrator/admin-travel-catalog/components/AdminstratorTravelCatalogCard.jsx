import { useState } from "react";
import "../styles/AdminstratorTravelCatalogCard.css";

function AdminstratorTravelCatalogCard({ origem, destino, duracao, price, goAndGoback }) {
  const [mostrarPopup, setMostrarPopup] = useState(false);

  const [origemEditada, setOrigemEditada] = useState(origem);
  const [destinoEditado, setDestinoEditado] = useState(destino);
  const [duracaoEditada, setDuracaoEditada] = useState(duracao);
  const [precoEditado, setPrecoEditado] = useState(price);
  const [tipoViagemEditado, setTipoViagemEditado] = useState(goAndGoback);

  function abrirPopup() {
    setMostrarPopup(true);
  }

  function fecharPopup() {
    setMostrarPopup(false);
  }

  function salvarInformacoes() {
    console.log("Origem:", origemEditada);
    console.log("Destino:", destinoEditado);
    console.log("Duracao:", duracaoEditada);
    console.log("Preco:", precoEditado);
    console.log("Tipo de viagem:", tipoViagemEditado);
    setMostrarPopup(false);
  }

  return (
    <>
      <div className="layout-card" onClick={abrirPopup}>
        <div className="layout-information-card">
          <div>
            <p className="title-information-card">ORIGEM</p>
            <p className="information-card">{origemEditada}</p>
          </div>
          <div>
            <p className="title-information-card">DESTINO</p>
            <p className="information-card">{destinoEditado}</p>
          </div>
          <div>
            <p className="title-information-card">DURACAO</p>
            <p className="information-card">{duracaoEditada}</p>
          </div>
          <div>
            <p className="title-information-card">A PARTIR DE</p>
            <p className="information-card">{precoEditado}</p>
          </div>
          <button><i className="bi bi-copy"></i></button>
        </div>

        <div className="layout-button-card">
          <i className="bi bi-bus-front"></i>
          <i className="bi bi-qr-code-scan"></i>

          <div>
            {tipoViagemEditado === "go" ? (
              <div className="go-and-goback">
                <i className="bi bi-arrow-right"></i>
                <p>somente ida</p>
              </div>
            ) : (
              <div className="go-and-goback">
                <i className="bi bi-arrow-left-right"></i>
                <p>ida e volta</p>
              </div>
            )}
          </div>

          <div className="button-card">
            <button>Ativa</button>
          </div>
        </div>
      </div>

      {mostrarPopup && (
        <div className="popup-fundo">
          <div className="popup-conteudo">
            <h2>Editar Informações</h2>

            <label>Origem</label>
            <input type="text" value={origemEditada} onChange={(e) => setOrigemEditada(e.target.value)} />

            <label>Destino</label>
            <input type="text" value={destinoEditado} onChange={(e) => setDestinoEditado(e.target.value)} />

            <label>Duração</label>
            <input type="text" value={duracaoEditada} onChange={(e) => setDuracaoEditada(e.target.value)} />

            <label>Preço</label>
            <input type="text" value={precoEditado} onChange={(e) => setPrecoEditado(e.target.value)} />

            <label>Tipo de viagem</label>
            <select value={tipoViagemEditado} onChange={(e) => setTipoViagemEditado(e.target.value)}>
              <option value="go">Somente ida</option>
              <option value="goAndGoback">Ida e volta</option>
            </select>

            <div className="popup-botoes">
              <button onClick={salvarInformacoes}>Salvar</button>
              <button onClick={fecharPopup}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AdminstratorTravelCatalogCard;
