import { useState, useContext } from "react";
import SideBar from "../../../common-components/components/SideBar";
import HeaderTravelCatalog from "./components/HeaderTravelCatalog"
import TravelCatalogPanel from "./components/TravelCatalogPanel"
import ModalAddTravel from "./components/ModalAddTravel"
import { AdminContext } from "../../../../infrastructure/context/AdminProvider";
import "./styles/AdminTravelCatalog.css"

export default function AdminTravelCatalog() {
  const { travelInfo, setTravelInfo } = useContext(AdminContext);

  const [sideBarIsOpen, setSideBarIsOpen] = useState(true);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [overlayActive, setOverlayActive] = useState(false);

  const [selectedTravel, setSelectedTravel] = useState(null);

  const handleToggleAddModal = () => {
    setOpenAddModal(prev => !prev);
    setOverlayActive(prev => !prev);
  };

  const handleToggleEditModal = (employee) => {
    setSelectedTravel(employee);
    setOpenEditModal(prev => !prev);
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
          handleToggleAddModal={handleToggleAddModal}
        ></TravelCatalogPanel>

        <ModalAddTravel openAddModal={openAddModal} handleToggleAddModal={handleToggleAddModal} ></ModalAddTravel>
      </div>

      {overlayActive && (
                <div
                    className="overlay-modal"
                    onClick={() => {
                        setOpenAddModal(false);
                        setOpenEditModal(false);
                        setOverlayActive(false);
                    }}
                ></div>
            )}
    </div>

  )
}