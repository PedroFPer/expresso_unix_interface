import { useState } from "react";
import SideBar from "../../../common-components/components/SideBar"
import HeaderManagerEmployees from "./components/HeaderManagerEmployees";
import EmployeesPanel from "./components/EmployeesPanel";
import ModelAddEmployees from "./components/ModelAddEmployees";
import "./styles/AdminManageEmployees.css"

export default function AdminManageEmployees() {

    const [sideBarIsOpen, setSideBarIsOpen] = useState(true);
    const [openModal, setOpenModal] = useState(false);
    const [overlayActive, setOverlayActive] = useState(false)


    const handleToggleModal = () => {
        setOpenModal(prev => !prev);
        setOverlayActive(prev => !prev);
    };


    return (

        <div id="admin-manage-employees"
            className={sideBarIsOpen ? "manage-employees-sidebar-open" : "manage-employees-sidebar-closed"}>
            <SideBar
                sideBarIsOpen={sideBarIsOpen}
                setSideBarIsOpen={setSideBarIsOpen}></SideBar>
            <div id="main-manage-employees">
                <HeaderManagerEmployees ></HeaderManagerEmployees>
                <EmployeesPanel handleToggleModal={handleToggleModal}></EmployeesPanel>
                <ModelAddEmployees openModal={openModal}></ModelAddEmployees>
            </div>

            {overlayActive && (
                <div className="overlay-modal-manage-employees"
                    onClick={handleToggleModal}></div>
            )}
        </div>


    );
}


