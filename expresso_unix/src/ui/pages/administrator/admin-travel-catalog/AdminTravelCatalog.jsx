import { useState, useContext } from "react";
import SideBar from "../../../common-components/components/SideBar";
import HeaderTravelCatalog from "./components/HeaderTravelCatalog"
import TravelCatalogPanel from "./components/TravelCatalogPanel"
import ModelAddTravel from "./components/ModelAddTravel"
import { AdminContext } from "../../../../infrastructure/context/AdminProvider";
import "./styles/AdminTravelCatalog.css"

export default function AdminTravelCatalog() {
  const { travelInfo, setTravelInfo } = useContext(AdminContext);

  const [sideBarIsOpen, setSideBarIsOpen] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [overlayActive, setOverlayActive] = useState(false)


  const handleToggleModal = () => {
    setOpenModal(prev => !prev);
    setOverlayActive(prev => !prev);
  };


  return (

    <div id="admin-travel-catalog"
      className={sideBarIsOpen ? "travel-catalog-sidebar-open" : "travel-catalog-sidebar-closed"}>
      <SideBar
        sideBarIsOpen={sideBarIsOpen}
        setSideBarIsOpen={setSideBarIsOpen}></SideBar>
      <div id="main-travel-catalog">
        <HeaderTravelCatalog> </HeaderTravelCatalog>
        <TravelCatalogPanel
          travelInfo={travelInfo}
          setTravelInfo={setTravelInfo}
          handleToggleModal={handleToggleModal}
        ></TravelCatalogPanel>
        <ModelAddTravel
          openModal={openModal} ></ModelAddTravel>
      </div>
      {overlayActive && (
        <div className="overlay-modal-travel-catalog"
          onClick={handleToggleModal}></div>
      )}
    </div>

  )
}