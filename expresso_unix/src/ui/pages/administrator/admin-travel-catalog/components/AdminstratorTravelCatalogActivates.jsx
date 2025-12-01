import { useState } from "react";
import AdminstratorTravelCatalogCard from "./AdminstratorTravelCatalogCard";
import Models from "./ModelTravelCatalog";
import "../styles/AdminstratorTravelCatalogActivates.css";

function AdminstratorTravelCatalogAtivas() {
  const [toggle, setToggle] = useState(false);

  const [cardsList, setCardsList] = useState([
    { origem: "Feira de Santana, BA - 07:00", destino: "Salvador, BA - 09:00", duracao: "2:00", price: "R$ 80,00", goAndGoback: "go" },
    { origem: "Feira de Santana, BA - 08:00", destino: "Cachoeira, BA - 10:30", duracao: "2:30", price: "R$ 75,00", goAndGoback: "" }
  ]);

  function handleAddViagem(viagem) {
    setCardsList(prev => [...prev, viagem]);
  }

  return (
    <div className="catalogo-activity">
      <div className="topo">
        <h2>Viagens</h2>
        <Models 
          TitleButton={"+ Adicionar Viagem"} 
          TitleModel={"Adicionar Viagem"} 
          onAddViagem={handleAddViagem}
        />
      </div>

      <div className="inputs-area">
        {!toggle ? (
          <>
            <div className="input-block">
              <p>Origem</p>
              <div className="input-icon">
                <i className="bi bi-geo-alt"></i>
                <input type="text" />
              </div>
            </div>

            <button className="toggle-button" onClick={() => setToggle(true)}>
              <i className="bi bi-arrow-left-right"></i>
            </button>

            <div className="input-block">
              <p>Destino</p>
              <div className="input-icon">
                <i className="bi bi-flag"></i>
                <input type="text" />
              </div>
            </div>

            <div className="container-input-date">
              <input type="date" className="input-date" />
              <i className="bi bi-calendar-event icon-calendar"></i>
            </div>

            <button className="search">Buscar</button>
          </>
        ) : (
          <>
            <div className="input-block">
              <p>Destino</p>
              <div className="input-icon">
                <i className="bi bi-flag"></i>
                <input type="text" />
              </div>
            </div>

            <button className="toggle-button" onClick={() => setToggle(false)}>
              <i className="bi bi-arrow-left-right"></i>
            </button>

            <div className="input-block">
              <p>Origem</p>
              <div className="input-icon">
                <i className="bi bi-geo-alt"></i>
                <input type="text" />
              </div>
            </div>

            <div className="container-input-date">
              <input type="date" className="input-date" />
              <i className="bi bi-calendar-event icon-calendar"></i>
            </div>

            <button className="search">Buscar</button>
          </>
        )}
      </div>

      <div className="dates">
        <button className="arrow">
          <i className="bi bi-arrow-left-circle"></i>
        </button>

        <div>Sábado, 24/10</div>

        <button className="arrow">
          <i className="bi bi-arrow-right-circle"></i>
        </button>
      </div>

      <div>
        {cardsList.map((item, index) => (
          <AdminstratorTravelCatalogCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default AdminstratorTravelCatalogAtivas;
