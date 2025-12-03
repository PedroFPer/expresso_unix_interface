import AdminLayoutWrapper from "../../../common-components/components/AdminLayoutWrapper";
import HeaderManagerEmployees from "./components/HeaderManagerEmployees";
import EmployeesPanel from "./components/EmployeesPanel";
import "./styles/AdminManageEmployees.css"

export default function AdminManageEmployees() {

    const headerTitle = ""

   
    return (
        <AdminLayoutWrapper>
            <div id="admin-manage-employees">
                <HeaderManagerEmployees ></HeaderManagerEmployees>
                <EmployeesPanel></EmployeesPanel>
            </div>
        </AdminLayoutWrapper>
            
    );
}


