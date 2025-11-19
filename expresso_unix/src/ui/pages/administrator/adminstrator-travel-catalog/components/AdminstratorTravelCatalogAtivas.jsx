import { useState } from "react";
import "../styles/AdminstratorTravelCatalogAtivas.css"
import AdminstratorTravelCatalogCard from "./AdminstratorTravelCatalogCard";

const cardsList = [
  { origem: "São Paulo", destino: "Rio", duracao: "6h", price: "R$ 120",goAndGoback:"go" },
  { origem: "Curitiba", destino: "Florianópolis", duracao: "4h", price: "R$ 95",goAndGoback:"go" },
  { origem: "BH", destino: "Vitória", duracao: "5h", price: "R$ 110",goAndGoback:"" },
];

function AdminstratorTravelCatalogAtivas() {
const [ButtonToggleTripIsClicked, setButtonToggleTripIsClicked] = useState(false)
const on="20"
const after="21"
const before="19"




    return (
        <div className="lista-viagens">

            <div>
                <div className="layout-title-viagens">
                    <h2>Viagens</h2>
                    <button>+ Adicionar Viagem</button>
                </div>
                {ButtonToggleTripIsClicked? (
                    <div className="layout-inputs-informations">
                        <div className="layout-input-trip">
                            <p>Destino</p>
                            <input type="text" />
                        </div>
                        <button className="toggle-button" onClick={()=> setButtonToggleTripIsClicked(!ButtonToggleTripIsClicked)}> <i class="bi bi-arrow-left-right"></i></button>
                        <div className="layout-input-trip">
                            
                            <p>Origem</p>
                            <input type="text" />
                        </div>
                        <div className="layout-input-trip">
                            <p>Data de saida</p>
                            <input type="date" />
                        </div>
                        <button className="inputs-informations-button">Buscar</button>
                    </div>

                ):(
                    <div className="layout-inputs-informations">
                        <div className="layout-input-trip">
                            <p>Origem</p>
                            <input type="text" />
                        </div>
                        <button className="toggle-button" onClick={()=> setButtonToggleTripIsClicked(!ButtonToggleTripIsClicked)}> <i class="bi bi-arrow-left-right"></i></button>
                        <div className="layout-input-trip">
                            <p>Destino</p>
                            <input type="text" />
                        </div>
                        <div className="layout-input-trip">
                            <p>Data de saida</p>
                            <input type="date" />
                        </div>
                        <button className="inputs-informations-button">Buscar</button>
                    </div>
                )}
                <div className="layout-choose-date">
                    <button className="button-choose-date"><i class="bi bi-arrow-left-circle"></i></button>
                    <div>{before} {on} {after}</div>
                    <button className="button-choose-date"><i class="bi bi-arrow-right-circle"></i></button>
                </div>
            </div>
            <div>
            {cardsList.map((item, index) => (
                <AdminstratorTravelCatalogCard
                    key={index}
                    origem={item.origem}
                    destino={item.destino}
                    duracao={item.duracao}
                    price={item.price}
                    goAndGoback={item.goAndGoback}
                    />
                ))}
            </div>

        
        </div>
    );
}

export default AdminstratorTravelCatalogAtivas;
