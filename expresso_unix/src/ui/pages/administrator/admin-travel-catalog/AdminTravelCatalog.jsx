import AdminLayoutWrappert from "../../../common-components/components/AdminLayoutWrapper"
import HeaderTravelCatalog from "./components/HeaderTravelCatalog"
import TravelCatalogPanel from "./components/TravelCatalogPanel"
import "./styles/AdminTravelCatalog.css"

export default function AdminTravelCatalog() {
  return (
    <AdminLayoutWrappert >
      <div id="admin-travel-catalog">
        <HeaderTravelCatalog> </HeaderTravelCatalog>
        <TravelCatalogPanel></TravelCatalogPanel>
      </div>
    </AdminLayoutWrappert>
  )
}