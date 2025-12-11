import { useState } from "react";
import SideBar from "../../../common-components/components/SideBar";
import HeaderManagerEmployees from "./components/HeaderManagerEmployees";
import EmployeesPanel from "./components/EmployeesPanel";
import ModalAddEmployees from "./components/ModalAddEmployees";
import ModalEditEmployees from "./components/ModalEditEmployees";
import "./styles/AdminManageEmployees.css";

export default function AdminManageEmployees() {

    const [sideBarIsOpen, setSideBarIsOpen] = useState(true);
    const [openAddModal, setOpenAddModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [overlayActive, setOverlayActive] = useState(false);

    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const handleToggleAddModal = () => {
        setOpenAddModal(prev => !prev);
        setOverlayActive(prev => !prev);
    };

    const handleToggleEditModal = (employee) => {
        console.log(employee)
        setSelectedEmployee(employee);
        setOpenEditModal(prev => !prev);
        setOverlayActive(prev => !prev);
    };

    return (
        <div
            id="admin-manage-employees"
            className={
                sideBarIsOpen
                    ? "manage-employees-sidebar-open"
                    : "manage-employees-sidebar-closed"
            }
        >
            <SideBar
                sideBarIsOpen={sideBarIsOpen}
                setSideBarIsOpen={setSideBarIsOpen}
            />

            <div id="main-manage-employees">
                <HeaderManagerEmployees />

                <EmployeesPanel
                    handleToggleAddModal={handleToggleAddModal}
                    handleToggleEditModal={handleToggleEditModal}
                />

                <ModalAddEmployees
                    openAddModal={openAddModal}
                    handleToggleAddModal={handleToggleAddModal}
                />

                <ModalEditEmployees
                    openEditModal={openEditModal}
                    handleToggleEditModal={handleToggleEditModal}
                    selectedEmployee={selectedEmployee}
                />
            </div>

            {overlayActive && (
                <div
                    className="overlay-modal-manage-employees"
                    onClick={() => {
                        setOpenAddModal(false);
                        setOpenEditModal(false);
                        setOverlayActive(false);
                    }}
                ></div>
            )}
        </div>
    );
}
