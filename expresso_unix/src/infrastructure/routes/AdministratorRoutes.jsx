import { Routes, Route } from 'react-router-dom'
import AdministratorLogin from '../../ui/pages/administrator/administrator-login/AdministratorLogin.jsx'

export default function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AdministratorLogin />} /> 
    </Routes>
  )
}