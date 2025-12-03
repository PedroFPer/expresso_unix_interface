import AdminLayoutWrapper from "../../../common-components/components/AdminLayoutWrapper";
import HeaderBaseDesktop from "../../../common-components/components/HeaderBaseDesktop";
import EmployeesPanel from "./components/EmployeesPanel";
import "./styles/AdminManageEmployees.css"

export default function AdminManageEmployees() {

    const headerTitle = "Gerenciar Funcionarios"

   
    return (
        <AdminLayoutWrapper>
            <div id="admin-manage-employees">
                <HeaderBaseDesktop headerTitle={headerTitle} ></HeaderBaseDesktop>
                <EmployeesPanel></EmployeesPanel>
            </div>
        </AdminLayoutWrapper>
            
    );
}


