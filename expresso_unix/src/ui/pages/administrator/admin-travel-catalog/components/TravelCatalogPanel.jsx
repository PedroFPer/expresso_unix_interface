import { useState } from "react";
import "../styles/TravelCatalogPanel.css";

export default function TravelCatalogPanel() {

    const [tempOrigin, setTempOrigin] = useState("");
    const [tempDestination, setTempDestination] = useState("");
    const [tempDate, setTempDate] = useState("");

    return (
        <div id="travel-catalog-panel">
            <div id="header-travel-catalog-panel">
                <h3>Catalogo de Viagens</h3>
                <button>Adicionar Viagem</button>
            </div>

            <form id="search-travel-catalog-panel" >
                <div className="form-group-search-travel">
                    <label className="form-label">Origem</label>
                    <input
                        type="text"
                        className="form-control"
                        value={tempOrigin}
                        onChange={(e) => setTempOrigin(e.target.value)}
                        placeholder="Feira de Santana, BA"
                    />
                </div>

                <div className="form-group-search-travel">
                    <label className="form-label">Destino</label>
                    <input
                        type="text"
                        className="form-control"
                        value={tempDestination}
                        onChange={(e) => setTempDestination(e.target.value)}
                        placeholder="Cachoeira, BA"
                    />
                </div>

                <div className="form-group-search-travel">
                    <label className="form-label">Data</label>
                    <input
                        type="date"
                        className="form-control"
                        value={tempDate}
                        onChange={(e) => setTempDate(e.target.value)}
                    />
                </div>

                <button className="btn btn-primary">Buscar</button>
            </form>

            <div className="travel-catalog-list">
                <div></div>
            </div>
        </div>
    );
}
