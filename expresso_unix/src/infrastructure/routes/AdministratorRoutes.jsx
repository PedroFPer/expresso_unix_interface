  import { Routes, Route, Navigate  } from 'react-router-dom'
  import AdministratorLogin from '../../ui/pages/administrator/administrator-login/AdministratorLogin.jsx'
  import AdministratorRegister from '../../ui/pages/administrator/administrator-register/AdministratorRegister.jsx'
  import Catalogo from '../../ui/pages/administrator/adminstrator-travel-catalog/AdminstratorTravelCatalog.jsx'
  import AdminstratorManageEmployees from '../../ui/pages/administrator/administrator-manage-employees/AdminstratorManageEmployees.jsx'
  export default function AdministratorRoutes() {
    return (
      <Routes>
        <Route index element={<Navigate to="manage-employees" replace />} />
        <Route path="manage-employees" element={<AdminstratorManageEmployees/>} />
        <Route path="catalogo" element={<Catalogo/>} />
        <Route path="login" element={<AdministratorLogin />} /> 
        <Route path ="register" element ={<AdministratorRegister />} />
      </Routes>
    )
  }