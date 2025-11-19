  import { Routes, Route, Navigate  } from 'react-router-dom'
  import AdministratorLogin from '../../ui/pages/administrator/administrator-login/AdministratorLogin.jsx'
  import AdministratorRegister from '../../ui/pages/administrator/administrator-register/AdministratorRegister.jsx'
  import AdminstratorPerfil from '../../ui/pages/administrator/adminstrator-perfil/AdminstratorPerfil.jsx'
  import AdminstratorAccount from '../../ui/pages/administrator/adminstrator-account/AdminstratorAccount.jsx'
  import AdminstratorSupport from '../../ui/pages/administrator/adiminstrator-support/AdminstratorSupport.jsx'
  import Catalogo from '../../ui/pages/administrator/adminstrator-travel-catalog/AdminstratorTravelCatalog.jsx'
  import Home from '../../ui/pages/administrator/pagina-modelo/Home.jsx'

  export default function AdministratorRoutes() {
    return (
      <Routes>
        <Route index element={<Navigate to="perfil" replace />} />

        <Route path="modelo" element={<Home/>} />
        <Route path="catalogo" element={<Catalogo/>} />
        <Route path="support" element={<AdminstratorSupport/>} />
        <Route path="account" element={<AdminstratorAccount/>} />
        <Route path="perfil" element={<AdminstratorPerfil/>} /> 
        <Route path="login" element={<AdministratorLogin />} /> 
        <Route path ="register" element ={<AdministratorRegister />} />
      </Routes>
    )
  }