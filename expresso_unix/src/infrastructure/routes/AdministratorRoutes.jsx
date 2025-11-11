  import { Routes, Route, Navigate  } from 'react-router-dom'
  import AdministratorLogin from '../../ui/pages/administrator/administrator-login/AdministratorLogin.jsx'
  import AdministratorRegister from '../../ui/pages/administrator/administrator-register/AdministratorRegister.jsx'

  export default function AdministratorRoutes() {
    return (
      <Routes>
        <Route index element={<Navigate to="login" replace />} />
        
        <Route path="login" element={<AdministratorLogin />} /> 
        <Route path ="register" element ={<AdministratorRegister />} />
      </Routes>
    )
  }