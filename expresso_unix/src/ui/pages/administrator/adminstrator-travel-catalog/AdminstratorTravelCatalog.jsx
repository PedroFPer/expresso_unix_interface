import { useState } from "react";
import SideBar from "../../../common-components/pagina-modelo/Components/SideBar";
import AdminstratorTravelCatalogAtivas from "./components/AdminstratorTravelCatalogAtivas";
import AdminstratorTravelCatalogFinalizadas from "./components/AdminstratorTravelCatalogFinalizadas";
import AdminstratorTravelCatalogCanceladas from "./components/AdminstratorTravelCatalogCanceladas";
import "./styles/AdminstratorTravelCatalog.css";

function AdminstratorTravelCatalog() {

    const [abaAtiva, setAbaAtiva] = useState("ativas");

    return (
        <div className="grid-geral">
            <SideBar />

            <main>

                <div className="layout-title-travel-catalog">
                    <h1 className="titulo-principal">Catalogo de Viagens</h1>
                    <div className="area-botoes-catalogo">
                        <button onClick={() => setAbaAtiva("ativas")}>
                            Viagens Ativas
                        </button>
                        <button onClick={() => setAbaAtiva("finalizadas")}>
                            Viagens Finalizadas
                        </button>
                        <button onClick={() => setAbaAtiva("canceladas")}>
                            Viagens Canceladas
                        </button>
                    </div>

                    
                </div>

                <div className="conteudo-catalogo">
                    {abaAtiva === "ativas" && <AdminstratorTravelCatalogAtivas />}
                    {abaAtiva === "finalizadas" && <AdminstratorTravelCatalogFinalizadas />}
                    {abaAtiva === "canceladas" && <AdminstratorTravelCatalogCanceladas />}
                </div>

            </main>
        </div>
    );
}

export default AdminstratorTravelCatalog;
