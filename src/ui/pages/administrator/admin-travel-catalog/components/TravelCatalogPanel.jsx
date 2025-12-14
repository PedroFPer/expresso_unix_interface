import { useState } from "react";
import { formatUtils } from "../../../../../infrastructure/utils/formatUtils";
import { maskUtils } from "../../../../../infrastructure/utils/maskUtils";
import "../styles/TravelCatalogPanel.css";

export default function TravelCatalogPanel({ travelInfo, handleToggleAddModal }) {

    const [tempOrigin, setTempOrigin] = useState("");
    const [tempDestination, setTempDestination] = useState("");
    const [tempDate, setTempDate] = useState("");

    const [searchOrigin, setSearchOrigin] = useState("");
    const [searchDestination, setSearchDestination] = useState("");
    const [searchDate, setSearchDate] = useState("");





    const filteredTravel = (travelInfo || []).filter(travelItem =>
        travelItem &&
        travelItem.originCity?.toLowerCase().startsWith(searchOrigin.toLowerCase()) &&
        travelItem.destinyCity?.toLowerCase().startsWith(searchDestination.toLowerCase()) &&
        (searchDate === "" ||
            formatUtils.toInputDateFormat(travelItem.dateDeparture) === searchDate)
    );





    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchOrigin(tempOrigin);
        setSearchDestination(tempDestination);
        setSearchDate(tempDate);


    };

    return (
        <div id="travel-catalog-panel">

            <div id="header-travel-catalog-panel">
                <h3>Catalogo de Viagens</h3>
                <button onClick={handleToggleAddModal}>Adicionar Viagem</button>
            </div>

            <form id="search-travel-catalog-panel" onSubmit={handleSubmit}>

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


            <ul id="travel-catalog-list">

                {filteredTravel.map((travel, index) => {


                    return (
                        <li key={index} className="travel-catalog-item">

                            <div className="item-info-primary">

                                <div>
                                    <strong>ORIGEM</strong>
                                    <p>{travel.originCity}</p>
                                </div>

                                <div>
                                    <strong>DESTINO</strong>
                                    <p>{travel.destinyCity}</p>
                                </div>

                                <div>
                                    <strong>DATA DE SAIDA</strong>
                                    <data value={maskUtils.dateToBR(travel.dateDeparture)}>{maskUtils.dateToBR(travel.dateDeparture)}</data>
                                </div>

                                <div>
                                    <strong>PREÇO</strong>
                                    <p>R$ {formatUtils.toCurrencyBRL(travel.price)}</p>
                                </div>

                                <button className="btn-no-style">
                                    <div className="icon-copy">
                                        <i className="bi bi-copy"></i>
                                    </div>
                                </button>

                            </div>

                            <div className="item-info-secondary">

                                <div className="group-icon-info">

                                    <i className="bi bi-bus-front"></i>

                                    <div className="group-icon">
                                        <i className="bi bi-qr-code-scan"></i>
                                        <p>E-ticket</p>
                                    </div>

                                    <div className="group-icon">
                                        <i className="bi bi-arrow-right-short"></i>
                                        <p>Somente Ida</p>
                                    </div>

                                </div>

                                <div className="state-travel-item">
                                    <p>Ativa</p>
                                </div>

                            </div>

                        </li>
                    );
                })}

            </ul>

        </div>
    );
}
