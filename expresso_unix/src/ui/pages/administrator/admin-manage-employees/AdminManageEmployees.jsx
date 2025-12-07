import { useState } from "react";
import AdminLayoutWrapper from "../../../common-components/components/AdminLayoutWrapper";
import HeaderManagerEmployees from "./components/HeaderManagerEmployees";
import EmployeesPanel from "./components/EmployeesPanel";
import ModelAddEmployees from "./components/ModelAddEmployees";
import "./styles/AdminManageEmployees.css"

export default function AdminManageEmployees() {

    const [openModal, setOpenModal] = useState(false);

    const handleToggleModal = () => {
        setOpenModal(prev => !prev);
    };



    return (
        <AdminLayoutWrapper
            openModal={openModal}
            handleToggleModal ={handleToggleModal} >
            <div id="admin-manage-employees">
                <HeaderManagerEmployees ></HeaderManagerEmployees>
                <EmployeesPanel
                    handleToggleModal={handleToggleModal}
                ></EmployeesPanel>
                <ModelAddEmployees
                    openModal={openModal}
                ></ModelAddEmployees>
            </div>
        </AdminLayoutWrapper>

    );
}


