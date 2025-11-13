  import { Routes, Route, Navigate  } from 'react-router-dom'
  import AdministratorLogin from '../../ui/pages/administrator/administrator-login/AdministratorLogin.jsx'
  import AdministratorRegister from '../../ui/pages/administrator/administrator-register/AdministratorRegister.jsx'
  import Home from '../../ui/pages/administrator/pagina-modelo/Home.jsx'

  export default function AdministratorRoutes() {
    return (
      <Routes>
        <Route index element={<Navigate to="pagina-modelo" replace />} />
        
        <Route path="pagina-modelo" element={<Home/>} /> 
        <Route path="login" element={<AdministratorLogin />} /> 
        <Route path ="register" element ={<AdministratorRegister />} />
      </Routes>
    )
  }