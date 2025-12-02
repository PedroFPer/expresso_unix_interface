import { Routes, Route, Navigate } from 'react-router-dom'
import AdminLogin from "../../ui/pages/administrator/admin-login/AdminLogin.jsx"
import AdminTravelCatalog from "../../ui/pages/administrator/admin-travel-catalog/AdminTravelCatalog.jsx"
import AdminManageEmployees from "../../ui/pages/administrator/admin-manage-employees/AdminManageEmployees.jsx"
import TesteAdmin from '../../ui/pages/administrator/testeAdmin.jsx'
import { AdminProvider } from "../context/AdminProvider.jsx"

export default function AdministratorRoutes() {
  return (
    <AdminProvider>
      <Routes>
        <Route index element={<Navigate to="login" replace />} />

        <Route path="login" element={<AdminLogin />} />
        <Route path="travel-catalog" element={<AdminTravelCatalog />} />
        <Route path="manage-employees" element={<AdminManageEmployees />} />
        <Route path="teste-admin" element={<TesteAdmin />} />
      </Routes>
    </ AdminProvider>
  )
}