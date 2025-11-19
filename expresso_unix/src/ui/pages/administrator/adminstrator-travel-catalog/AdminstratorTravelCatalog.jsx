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
        <div className="title-catalogo">
          <h1>Catalogo de Viagens</h1>

          <div className="tabs">
            <button
              className={abaAtiva === "ativas" ? "tab active" : "tab"}
              onClick={() => setAbaAtiva("ativas")}
            >
              Viagens Ativas
            </button>

            <button
              className={abaAtiva === "finalizadas" ? "tab active" : "tab"}
              onClick={() => setAbaAtiva("finalizadas")}
            >
              Viagens Finalizadas
            </button>

            <button
              className={abaAtiva === "canceladas" ? "tab active" : "tab"}
              onClick={() => setAbaAtiva("canceladas")}
            >
              Viagens Canceladas
            </button>
          </div>
        </div>

        <div className="catalogo-box">
          {abaAtiva === "ativas" && <AdminstratorTravelCatalogAtivas />}
          {abaAtiva === "finalizadas" && <AdminstratorTravelCatalogFinalizadas />}
          {abaAtiva === "canceladas" && <AdminstratorTravelCatalogCanceladas />}
        </div>
      </main>
    </div>
  );
}

export default AdminstratorTravelCatalog;
