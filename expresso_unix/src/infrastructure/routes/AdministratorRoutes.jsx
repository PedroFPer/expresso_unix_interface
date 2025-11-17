  import { Routes, Route, Navigate  } from 'react-router-dom'
  import AdministratorLogin from '../../ui/pages/administrator/administrator-login/AdministratorLogin.jsx'
  import AdministratorRegister from '../../ui/pages/administrator/administrator-register/AdministratorRegister.jsx'
  import AdminstratorSupport from '../../ui/pages/administrator/adiminstrator-support/AdminstratorSupport.jsx'

  export default function AdministratorRoutes() {
    return (
      <Routes>
        <Route index element={<Navigate to="support" replace />} />
        
        <Route path="support" element={<AdminstratorSupport/>} /> 
        <Route path="login" element={<AdministratorLogin />} /> 
        <Route path ="register" element ={<AdministratorRegister />} />
      </Routes>
    )
  }