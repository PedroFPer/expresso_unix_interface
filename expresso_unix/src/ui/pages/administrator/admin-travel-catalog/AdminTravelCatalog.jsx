import { useContext } from "react";
import AdminLayoutWrappert from "../../../common-components/components/AdminLayoutWrapper"
import HeaderTravelCatalog from "./components/HeaderTravelCatalog"
import TravelCatalogPanel from "./components/TravelCatalogPanel"
import { AdminContext } from "../../../../infrastructure/context/AdminProvider";
import "./styles/AdminTravelCatalog.css"

export default function AdminTravelCatalog() {
  const { travelInfo, setTravelInfo } = useContext(AdminContext);

  return (
    <AdminLayoutWrappert >
      <div id="admin-travel-catalog">
        <HeaderTravelCatalog> </HeaderTravelCatalog>
        <TravelCatalogPanel
        travelInfo ={travelInfo}
        setTravelInfo ={setTravelInfo}
        ></TravelCatalogPanel>
      </div>
    </AdminLayoutWrappert>
  )
}