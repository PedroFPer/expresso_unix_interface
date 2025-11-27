import { useState } from "react";
import SideBar from "../../../common-components/components/SideBar";
import AdminstratorTravelCatalogActivates from "./components/AdminstratorTravelCatalogActivates";
import "./styles/AdminstratorTravelCatalog.css";

function AdminstratorTravelCatalog() {
  const [abaActivates, setAbaActivates] = useState("activates");

  return (
    <div className="grid-general">
      <SideBar />

      <div>
        <main>
          <div className="title-catalogo">
            <h1>Catalogo de Viagens</h1>
            <div className="tabs">
              <button
                className={abaActivates === "activates" ? "tab active" : "tab"}
                onClick={() => setAbaActivates("activates")}
              >
                Viagens Ativas
              </button>
              <button
                className={abaActivates === "finalised" ? "tab active" : "tab"}
                onClick={() => setAbaActivates("finalised")}
              >
                Viagens Finalizadas
              </button>
              <button
                className={abaActivates === "cacellates" ? "tab active" : "tab"}
                onClick={() => setAbaActivates("cacellates")}
              >
                Viagens Canceladas
              </button>
            </div>
          </div>
          <div className="catalogo-box">
            {abaActivates === "activates" && <AdminstratorTravelCatalogActivates />}
        
          </div>
        </main>
      </div>
    </div>
  );
}

export default AdminstratorTravelCatalog;
