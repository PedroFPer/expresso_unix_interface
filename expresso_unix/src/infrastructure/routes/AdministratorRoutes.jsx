  import { Routes, Route, Navigate  } from 'react-router-dom'
  import AdministratorLogin from '../../ui/pages/administrator/administrator-login/AdministratorLogin.jsx'
  import AdministratorRegister from '../../ui/pages/administrator/administrator-register/AdministratorRegister.jsx'
  import AdminstratorAccount from '../../ui/pages/administrator/adminstrator-account/AdminstratorAccount.jsx'

  export default function AdministratorRoutes() {
    return (
      <Routes>
        <Route index element={<Navigate to="account" replace />} />
        
        <Route path="account" element={<AdminstratorAccount/>} /> 
        <Route path="login" element={<AdministratorLogin />} /> 
        <Route path ="register" element ={<AdministratorRegister />} />
      </Routes>
    )
  }